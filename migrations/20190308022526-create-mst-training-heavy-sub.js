'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mst_training_heavy_subs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.INTEGER
      },
      e: {
        type: Sequelize.STRING
      },
      d: {
        type: Sequelize.STRING
      },
      c: {
        type: Sequelize.STRING
      },
      b: {
        type: Sequelize.STRING
      },
      a: {
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
    return queryInterface.dropTable('mst_training_heavy_subs');
  }
};