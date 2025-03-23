import os
import shutil
import tempfile
import threading
import time
from urllib.parse import quote
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import StreamingResponse
from yt_dlp import YoutubeDL
import logging
from starlette.background import BackgroundTask

logging.basicConfig(level=logging.INFO)

app = FastAPI()

# yt-dlp options to remove watermarks where possible
YDL_OPTIONS = {
    'outtmpl': '%(title)s.%(ext)s',
    'format': 'best',
    'noplaylist': True,
    'quiet': True,
    'merge_output_format': 'mp4',
    'max_filesize': 2 * 1024 * 1024 * 1024,  # Set max file size to 2GB
    'postprocessors': [{'key': 'FFmpegVideoConvertor', 'preferedformat': 'mp4'}],
    'restrictfilenames': True,
}

# Some sites like TikTok require special options to avoid watermark
TIKTOK_OPTIONS = {
    **YDL_OPTIONS,
    'extractor_args': {'tiktok': {'no_watermark': True}},
}

def download_video(url: str) -> tuple[str, str]:
    """Downloads the video and returns the file path and temp directory."""
    temp_dir = tempfile.mkdtemp()
    YDL_OPTIONS['outtmpl'] = os.path.join(temp_dir, '%(title)s.%(ext)s')
    
    try:
        with YoutubeDL(YDL_OPTIONS if "tiktok.com" not in url else TIKTOK_OPTIONS) as ydl:
            info = ydl.extract_info(url, download=True)
            file_path = ydl.prepare_filename(info)
            return file_path
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

def schedule_deletion(directory: str, delay: int = 120):
    """Deletes the specified directory after a delay (default: 2 minutes)."""
    def delete():
        time.sleep(delay)
        if os.path.exists(directory):
            os.remove(directory)
            logging.info(f"File {directory} deleted.")
        else:
            logging.info("File not found")

    threading.Thread(target=delete, daemon=True).start()


def file_streamer(file_path):
    """Yields video file data in chunks to prevent memory overflow."""
    with open(file_path, "rb") as f:
        yield from f

@app.get("/download/")
def download(url: str, background_tasks: BackgroundTasks):
    """API to download a video in the background and stream it."""
    file_path = download_video(url) # Schedule deletion

    # Encode the filename to avoid Unicode errors
    safe_filename = quote(os.path.basename(file_path))

    headers = {
        "Content-Disposition": f'attachment; filename*=UTF-8\'\'{safe_filename}'
    }

    
    return StreamingResponse(file_streamer(file_path), media_type="video/mp4", headers=headers, background=BackgroundTask(schedule_deletion, safe_filename, 60))
