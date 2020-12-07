'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vuelos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origen: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      id_origen: {
        type: Sequelize.STRING
      },
      id_destino: {
        type: Sequelize.STRING
      },
      operador: {
        type: Sequelize.STRING
      },
      clase: {
        type: Sequelize.STRING
      },
      sala: {
        type: Sequelize.STRING
      },
      hora_fecha: {
        type: Sequelize.STRING
      },
      precio_basica: {
        type: Sequelize.STRING
      },
      precio_clasica: {
        type: Sequelize.STRING
      },
      precio_confort: {
        type: Sequelize.STRING
      },
      precio_plus: {
        type: Sequelize.STRING
      },
      precio_premiere: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vuelos');
  }
};

