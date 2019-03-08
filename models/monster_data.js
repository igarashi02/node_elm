'use strict';
module.exports = (sequelize, DataTypes) => {
  const monster_data = sequelize.define('monster_data', {
    name: DataTypes.STRING,
    type: DataTypes.INTEGER,
    life: DataTypes.INTEGER,
    hp: DataTypes.STRING,
    pow: DataTypes.STRING,
    int: DataTypes.STRING,
    hit: DataTypes.STRING,
    avo: DataTypes.STRING,
    tuff: DataTypes.STRING
  }, {
    underscored: true,
  });
  monster_data.associate = function(models) {
    // associations can be defined here
  };
  return monster_data;
};