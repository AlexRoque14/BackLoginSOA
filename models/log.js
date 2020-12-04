'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Log.init({
    id_usuario: DataTypes.STRING,
    name_usuario: DataTypes.STRING,
    metodo_inicio: DataTypes.STRING,
    status: DataTypes.STRING,
    hora_fecha: DataTypes.STRING,
    actividad: DataTypes.STRING,
    roll: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Log',
  });
  return Log;
};