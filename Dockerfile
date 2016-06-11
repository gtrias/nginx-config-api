FROM node

MAINTAINER Genar <genar@acs.li>

RUN npm install -g forever sails

COPY . /app

WORKDIR /app

ENV NODE_ENV production

ENTRYPOINT node app.js
