FROM node

RUN npm install -g forever

ENV NODE_ENV production

ENTRYPOINT forever start app.js
