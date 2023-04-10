const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type:DataTypes.STRING,
      isUrl:true,
      allowNull: false,
    },
    resumen_plato:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    nivel_salud:{
      type: DataTypes.ENUM("Poco saludable","Saludable","No saludable"),
      allowNull: false,
    },
    paso:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
