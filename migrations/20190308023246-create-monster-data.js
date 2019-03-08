'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('monster_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.INTEGER
      },
      life: {
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.STRING
      },
      pow: {
        type: Sequelize.STRING
      },
      int: {
        type: Sequelize.STRING
      },
      hit: {
        type: Sequelize.STRING
      },
      avo: {
        type: Sequelize.STRING
      },
      tuff: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('monster_data');
  }
};