'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movie_type', [
      {
        name: "Terror"
      },
      {
        name: "Comédia"
      },
      {
        name: "Drama"
      },
      {
        name: "Ficção científica"
      },
      {
        name: "Suspense"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movie_type', null, {});
  }
};