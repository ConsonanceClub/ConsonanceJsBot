FROM node:8.1

ARG PORT

WORKDIR /usr/src/app

RUN npm install

EXPOSE $PORT

CMD [ "npm", "start" ]
