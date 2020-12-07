'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vuelo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vuelo.init({
    origen: DataTypes.STRING,
    destino: DataTypes.STRING,
    operador: DataTypes.STRING,
    id_destino: DataTypes.STRING,
    id_origen: DataTypes.STRING,
    clase: DataTypes.STRING,
    sala: DataTypes.STRING,
    hora_fecha: DataTypes.STRING,
    precio_basica: DataTypes.STRING,
    precio_clasica: DataTypes.STRING,
    precio_confort: DataTypes.STRING,
    precio_plus: DataTypes.STRING,
    precio_premiere: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Vuelo',
  });
  return Vuelo;
};