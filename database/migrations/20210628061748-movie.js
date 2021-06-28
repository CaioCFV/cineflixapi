'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('movie', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING(200),
                allowNull: false,
                unique: true
            },
            id_type: {
              type: Sequelize.INTEGER,
              references: {
                  model: 'movie_type',
                  key: 'id',
                  deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                  onUpdate: 'CASCADE'
              }
          },
          release_date: {
            type: Sequelize.DATE,
            allowNull: false
          },
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('movie');
    }
};