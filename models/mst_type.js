'use strict';
module.exports = (sequelize, DataTypes) => {
  const mst_type = sequelize.define('mst_type', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  mst_type.associate = function(models) {
    // associations can be defined here
  };
  return mst_type;
};