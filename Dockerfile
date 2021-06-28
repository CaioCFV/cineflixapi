FROM node:alpine

WORKDIR /usr/src/cineflix

COPY package*.json ./

COPY init.sh /usr/src/cineflix

COPY . .

EXPOSE 5555
