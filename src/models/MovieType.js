const { Model, DataTypes } = require('sequelize')

class MovieType extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: true
                }
            },
        }, {
            sequelize,
            tableName: 'movie_type',
        })
    }

    static associate(models) {
        this.hasMany(models.Movie, { foreignKey: 'id_type', as: 'movie' });
    }

}

module.exports = MovieType