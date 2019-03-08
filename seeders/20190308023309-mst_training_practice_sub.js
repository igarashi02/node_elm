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
      return queryInterface.bulkInsert('mst_training_practice_subs', [{
          stage_id: 1,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 2,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 3,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 4,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 5,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 6,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 7,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 8,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 9,
          value: '',
          created_at: time,
          updated_at: time
      },{
          stage_id: 10,
          value: '',
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
