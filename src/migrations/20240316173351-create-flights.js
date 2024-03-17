'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Flightsnumber:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      airplaneid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Airplanes',
          key:'id',
        }
      },
      arrivalairportid: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:'Airports',
          key:'code',
        }
      },
      departureairportid: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:'Airports',
          key:'code',
        }
      },
      arrivaldate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      departuredate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalseats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};