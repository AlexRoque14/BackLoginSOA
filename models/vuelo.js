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
    clase: DataTypes.STRING,
    sala: DataTypes.STRING,
    hora_fecha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vuelo',
  });
  return Vuelo;
};