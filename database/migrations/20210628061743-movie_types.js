'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('movie_type', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('movie_type');
    }
};