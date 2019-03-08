'use strict';
module.exports = (sequelize, DataTypes) => {
  const mst_training_heavy_sub = sequelize.define('mst_training_heavy_sub', {
    stage_id: DataTypes.INTEGER,
    e: DataTypes.STRING,
    d: DataTypes.STRING,
    c: DataTypes.STRING,
    b: DataTypes.STRING,
    a: DataTypes.STRING
  }, {
    underscored: true,
  });
  mst_training_heavy_sub.associate = function(models) {
    // associations can be defined here
  };
  return mst_training_heavy_sub;
};