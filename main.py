import os
import shutil
import tempfile
import threading
import time
from urllib.parse import quote
from fastapi import FastAPI, HTTPException, BackgroundTasks, Query
from fastapi.responses import StreamingResponse
from yt_dlp import YoutubeDL
import logging
from starlette.background import BackgroundTask

logging.basicConfig(level=logging.INFO)

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Common download options
BASE_OPTIONS = {
    'noplaylist': True,
    'quiet': True,
    'restrictfilenames': True,
    'max_filesize': 2 * 1024 * 1024 * 1024,  # 2GB
}

# Mode-specific options
OPTIONS_WITH_WATERMARK = {
    **BASE_OPTIONS,
    'format': 'bv*+ba/bestvideo+bestaudio/best',
    'merge_output_format': 'mp4',
    'postprocessors': [{'key': 'FFmpegVideoConvertor', 'preferedformat': 'mp4'}],
}

OPTIONS_NO_WATERMARK = {
    **OPTIONS_WITH_WATERMARK,
    'extractor_args': {'tiktok': {'no_watermark': True}},
}

OPTIONS_MP3 = {
    **BASE_OPTIONS,
    'format': 'bestaudio/best',
    'postprocessors': [
        {
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }
    ],
    'outtmpl': '%(title)s.%(ext)s',
}

def get_options(mode: str, temp_dir: str):
    options = OPTIONS_WITH_WATERMARK
    if mode == 'no_watermark':
        options = OPTIONS_NO_WATERMARK
    elif mode == 'mp3':
        options = OPTIONS_MP3
    options = options.copy()
    options['outtmpl'] = os.path.join(temp_dir, '%(title)s.%(ext)s')
    return options

def download_video(url: str, mode: str) -> tuple[str, str]:
    """Downloads the video or audio and returns file path."""
    temp_dir = tempfile.mkdtemp()
    options = get_options(mode, temp_dir)
    try:
        with YoutubeDL(options) as ydl:
            info = ydl.extract_info(url, download=True)
            file_path = ydl.prepare_filename(info)
            # Append .mp3 extension manually if it's audio-only
            if mode == "mp3":
                file_path = os.path.splitext(file_path)[0] + ".mp3"
            return file_path, temp_dir
    except Exception as e:
        shutil.rmtree(temp_dir, ignore_errors=True)
        raise HTTPException(status_code=400, detail=str(e))

def schedule_deletion(directory: str, delay: int = 120):
    """Deletes the directory after a delay."""
    def delete():
        time.sleep(delay)
        if os.path.exists(directory):
            shutil.rmtree(directory, ignore_errors=True)
            logging.info(f"Deleted temp dir: {directory}")
    threading.Thread(target=delete, daemon=True).start()

def file_streamer(file_path: str):
    with open(file_path, "rb") as f:
        yield from f

@app.get("/download/")
def download(url: str, mode: str = Query("no_watermark", enum=["no_watermark", "with_watermark", "mp3"]), background_tasks: BackgroundTasks = None):
    """Downloads a video (with/without watermark) or audio (mp3)"""
    file_path, temp_dir = download_video(url, mode)
    filename = quote(os.path.basename(file_path))

    headers = {
        "Content-Disposition": f"attachment; filename*=UTF-8''{filename}"
    }

    media_type = "audio/mpeg" if mode == "mp3" else "video/mp4"

    return StreamingResponse(
        file_streamer(file_path),
        media_type=media_type,
        headers=headers,
        background=BackgroundTask(schedule_deletion, temp_dir, 60)
    )
