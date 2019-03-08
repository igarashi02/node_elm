'use strict';
module.exports = (sequelize, DataTypes) => {
  const mst_training_practice_sub = sequelize.define('mst_training_practice_sub', {
    stage_id: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  mst_training_practice_sub.associate = function(models) {
    // associations can be defined here
  };
  return mst_training_practice_sub;
};