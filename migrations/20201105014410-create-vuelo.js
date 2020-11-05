'use strict';
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vuelos');
  }
};