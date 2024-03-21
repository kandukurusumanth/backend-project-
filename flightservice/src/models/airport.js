'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
  
    static associate(models) {
      this.belongsTo(models.City, {foreignKey:'cityid'});
      this.hasMany(models.Flights,{foreignKey:'arrivalairportid'})
      this.hasMany(models.Flights,{foreignKey:'departureairportid'})

    }
  }
  Airport.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false

    },
    code: {
      type:DataTypes.STRING,
      allowNull:false
    },
    cityid: {
      type:DataTypes.INTEGER,
      allowNull:false,
      
      
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};