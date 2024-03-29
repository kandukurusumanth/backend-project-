'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flights,{foreignKey:'airplaneid'});
    }
  }
  Airplane.init({
    modelnumber: DataTypes.STRING,
    seats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};