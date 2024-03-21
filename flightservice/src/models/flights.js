'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane,{foreignKey:'airplaneid'});
      this.belongsTo(models.Airport,{foreignKey:'arrivalairportid',as:'arrival_port'});
      this.belongsTo(models.Airport,{foreignKey:'departureairportid',as:'departure_port'});
    }
  }
  Flights.init({
    Flightsnumber:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    airplaneid:{
      type:DataTypes.INTEGER,
      allowNull:false,
    } ,

    arrivalairportid: {
      type:DataTypes.STRING,
      allowNull:false,
     
      
    },
    departureairportid: {
     type:DataTypes.STRING,
     allowNull:false,
      
     
    },
    arrivaldate:{
      type: DataTypes.DATE,
      allowNull:false,
    },
    departuredate:{ 
      type:DataTypes.DATE,
      allowNull:false,
    },
    price:{ 
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    totalseats: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};