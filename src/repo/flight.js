const CrudRepository = require("./crud-repo");
const {Flights}= require('../models/index');
const flights = require("../models/flights");
const { Sequelize, Model, DataTypes } = require("sequelize");
const {Op} = require('sequelize') 
const { data } = require("../utils/common/sucess_response");
const sequelize = new Sequelize("mysql::memory:");
class Flight extends CrudRepository{
    constructor(){
        super(Flights);
    }
    async getflightinbetweenrepo({arrivalairport,departureairport,min=0,max=1e8,travllers=1,first,sort}){
      
       try {
            const flight = await Flights.findAll(
                {
                    where:
                    {
                        arrivalairportid:arrivalairport,
                        departureairportid:departureairport,
                        price:{[Op.between]:[min,max]},
                        totalseats:{[Op.gte]:travllers},

                

                
                
                    }
                    ,
                    order:sort
            
                    
                }
                
            );
            
            return flight
       } catch (error) {
            throw error
        
       }

    }
    

}
module.exports=Flight