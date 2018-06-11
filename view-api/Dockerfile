FROM node:8

WORKDIR /usr/app

COPY package.json  package.json 
COPY package-lock.json package-lock.json
COPY src src
COPY ecosystem.config.js ecosystem.config.js

RUN npm install --quiet
