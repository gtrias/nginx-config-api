# nginx-config-api [![Build status][build svg]][build status]

A simple API to generate Nginx reverse proxy configuration.

## Run using docker

```
docker run -d --name nginx-config-api -p <public>:1337 gtrias/nginx-config-api
```

## Launching the full stack with docker-compose

First install docker compose [Instructions], then:

```
docker-compose up -d
```

## Manual install

First clone this repository and then

```bash
npm install

npm app.js --prod
```

## Running tests

```
npm test
```

[build status]: https://travis-ci.org/gtrias/nginx-config-api
[build svg]: https://travis-ci.org/gtrias/nginx-config-api.svg?branch=master
[Instructions]: https://docs.docker.com/compose/install/
