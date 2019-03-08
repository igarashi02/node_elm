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
      return queryInterface.bulkInsert('mst_types', [{
          name: '早熟',
          created_at: time,
          updated_at: time
      },{
          name: '持続',
          created_at: time,
          updated_at: time
      },{
          name: '普通',
          created_at: time,
          updated_at: time
      },{
          name: '晩成',
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
