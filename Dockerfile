FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY init.sh /usr/src/app

COPY . .

EXPOSE 3000
