const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Movie = require('./Movie');
const MovieType = require('./MovieType');

Movie.init(connection);
MovieType.init(connection);

Movie.associate(connection.models);
MovieType.associate(connection.models);


module.exports = connection;