'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      const time = new Date();
      return queryInterface.bulkInsert('mst_stages', [{
          name: '第1段階',
          created_at: time,
          updated_at: time
      },{
          name: '第2段階',
          created_at: time,
          updated_at: time
      },{
          name: '第3段階',
          created_at: time,
          updated_at: time
      },{
          name: '第4段階',
          created_at: time,
          updated_at: time
      },{
          name: 'ピーク',
          created_at: time,
          updated_at: time
      },{
          name: '準ピーク',
          created_at: time,
          updated_at: time
      },{
          name: '第5段階',
          created_at: time,
          updated_at: time
      },{
          name: '第6段階',
          created_at: time,
          updated_at: time
      },{
          name: '第7段階',
          created_at: time,
          updated_at: time
      },{
          name: '第8段階',
          created_at: time,
          updated_at: time
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
