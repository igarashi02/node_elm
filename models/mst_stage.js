'use strict';
module.exports = (sequelize, DataTypes) => {
  const mst_stage = sequelize.define('mst_stage', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  mst_stage.associate = function(models) {
    // associations can be defined here
  };
  return mst_stage;
};