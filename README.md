# nginx-config-api [![Build status][build svg]][build status]

A simple API to generate Nginx reverse proxy configuration.

## Run using docker

```
docker run -d -p <public>:1337 gtrias/nginx-config-api
```

## Manual install

First clone this repository and then

```bash
npm install

npm app.js --prod
```

[build status]: https://travis-ci.org/gtrias/nginx-config-api
[build svg]: https://travis-ci.org/gtrias/nginx-config-api.svg?branch=master
