FROM node

MAINTAINER Genar <genar@acs.li>

RUN apt-get update && apt-get install -y libkrb5-dev && rm -rf /var/lib/apt/lists/*
RUN npm install -g sails

COPY . /app

WORKDIR /app

ENV NODE_ENV production

ENTRYPOINT node app.js
