FROM debian

RUN apt-get update && \
    apt-get install -y nginx-light && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir /app
ADD . /app

EXPOSE 80

CMD ["nginx", "-c", "/app/.nginx.conf"]
