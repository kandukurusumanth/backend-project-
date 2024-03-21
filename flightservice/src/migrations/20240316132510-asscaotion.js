'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
      type:'foreign key',
      name:'city_fk',
      fields:['cityid'],
      references:{
        table:'Cities',
        field:'id',
      },

    })
    await queryInterface.removeConstraint('Airports', 'lo'); 
    
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','city_fk');
    
  }
};