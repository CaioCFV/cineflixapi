const { Model, DataTypes } = require('sequelize')

class Movie extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: true
                }
            },
            release_date: DataTypes.DATEONLY,
            id_type: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'movie',
        })
    }

    static associate(models) {
        this.hasOne(models.MovieType, { foreignKey: 'id', as: 'type' });
    }

}

module.exports = Curso;