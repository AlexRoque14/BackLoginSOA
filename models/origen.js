'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class origen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  origen.init({
    nombre_origen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'origen',
  });
  return origen;
};