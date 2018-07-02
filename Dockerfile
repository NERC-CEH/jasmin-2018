FROM node:8

WORKDIR /usr/app

COPY package.json  package.json 
COPY package-lock.json package-lock.json
COPY src src
COPY public public

RUN npm install --quiet
