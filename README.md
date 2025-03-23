# fastapi_videod_downloader_without_watermark
Video Downloader without Watermark | FastAPI | Python


Steps to clone and run video downloader on your local pc.

1- Setup Python in your pc.
2- Open terminal of the VSCode.
3- Run following commands:-
    (i)   git clone https://github.com/raoadbul/fastapi_videod_downloader_without_watermark.git
    (ii)  cd fastapi_videod_downloader_without_watermark
    (iii) windows:
            (a) python -m venv venv
            (b) venv/script/activate
          mac & linux:
            (a) python3 -m venv venv
            (b) source venv/bin/activate
    (v)   pip install -r requirements.txt
    (vi)  uvicorn main:app
4- Open your browser
5- Goto this url -> http://127.0.0.1:8000/download/?url=your_url  #Replace your_url with the actual video url to download
6- Boom. That's it.