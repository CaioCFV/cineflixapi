#!/bin/sh
npm install
yarn sequelize db:drop
yarn sequelize db:create
yarn sequelize db:migrate
yarn sequelize db:seed:all
npm run dev