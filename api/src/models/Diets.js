const { DataTypes } = require('sequelize')

module.exports = (sequielize) => {
    sequielize.define('Diets',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            serial: true,
        },
        name:{
            type: DataTypes.INTEGER,
            unique: true,
            leng: [1, 30],
            allowNull: false,
        },
    })
}