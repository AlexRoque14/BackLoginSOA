'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.STRING
      },
      name_usuario: {
        type: Sequelize.STRING
      },
      metodo_inicio: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      hora_fecha: {
        type: Sequelize.STRING
      },
      actividad: {
        type: Sequelize.STRING,
        allowNull: true
      },
      roll: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Logs');
  }
};