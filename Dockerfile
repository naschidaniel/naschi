FROM python:3.13.5

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED=1

WORKDIR /app/backend/

RUN mkdir -p /app/site/

COPY dist /app/site/

RUN mkdir -p /app/data/

RUN mkdir -p /app/backend/

COPY backend  /app/backend/

RUN rm -rf .git

RUN pip install -r /app/backend/requirements.txt

RUN apt update -y

RUN apt install vim -y

RUN pyclean -v .

CMD ["python", "/app/backend/mqtt.py"]
