# nginx-config-api [![Build status][build svg]][build status]

A simple API to generate Nginx reverse proxy configuration.
This is a WIP so it's not already suitable for production.

## Run using docker

```
docker run -d --name nginx-config-api -p <public>:1337 gtrias/nginx-config-api
```

## How it works

The API register the hosts comming from remote RESTful calls to its database, the basic
body of a virtualhost is the next:

POST /virtualhost

```json
{
  "name": "yourappdomain.net",
  "portsPlain": "80",
  "locations": {
    "path": "/",
    "backends": [
       {
           "ip": "123.123.123.123",
           "ports": "80"
        },
        {
           "ip": "125.126.178.132",
           "ports": "8080"
        }
    ]
  }
}
```

To the next Configuration:

GET /virtualhost/nginx

```

  upstream 575c5cdee279570600c5a9ef_575c5cdee279570600c5a9f0 {

        server 123.123.123.123:80

        server 125.126.178.132:8080

  }

  server {
    server_name yourappdomain.net;
    proxy_buffering off;
    error_log /proc/self/fd/2;
    access_log /proc/self/fd/1;


    location / {
      proxy_pass http://575c5cdee279570600c5a9ef_575c5cdee279570600c5a9f0;
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;

      # HTTP 1.1 support
      proxy_http_version 1.1;
      proxy_set_header Connection "";
    }

  }
```

To be consumed by nginx container.

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

## docker-api-registar

You can use (docker-api-registar) to autoregister docker containers (WIP)



## Running tests

```
npm test
```

[build status]: https://travis-ci.org/gtrias/nginx-config-api
[build svg]: https://travis-ci.org/gtrias/nginx-config-api.svg?branch=master
[Instructions]: https://docs.docker.com/compose/install/
[docker-api-registar]: https://github.com/gtrias/docker-api-registrar
