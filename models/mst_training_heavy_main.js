'use strict';
module.exports = (sequelize, DataTypes) => {
  const mst_training_heavy_main = sequelize.define('mst_training_heavy_main', {
    stage_id: DataTypes.INTEGER,
    e: DataTypes.STRING,
    d: DataTypes.STRING,
    c: DataTypes.STRING,
    b: DataTypes.STRING,
    a: DataTypes.STRING
  }, {
    underscored: true,
  });
  mst_training_heavy_main.associate = function(models) {
    // associations can be defined here
  };
  return mst_training_heavy_main;
};