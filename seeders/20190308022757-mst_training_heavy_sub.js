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
      return queryInterface.bulkInsert('mst_training_heavy_subs', [{
          stage_id: 1,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 2,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 3,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 4,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 5,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 6,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 7,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 8,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 9,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 10,
          e: '',
          d: '',
          c: '',
          b: '',
          a: '',
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
