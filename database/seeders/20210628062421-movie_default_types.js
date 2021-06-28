'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movie_type', [
      {
        nome: "Terror"
      },
      {
        nome: "Comédia"
      },
      {
        nome: "Drama"
      },
      {
        nome: "Ficção científica"
      },
      {
        nome: "Suspense"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movie_type', null, {});
  }
};