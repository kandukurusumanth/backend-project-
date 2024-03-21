const CrudRepository = require("./crud-repo");
const {Flights}= require('../models/index');
const flights = require("../models/flights");
const { Sequelize, Model, DataTypes, where } = require("sequelize");
const {Op} = require('sequelize') 
const { data } = require("../utils/common/sucess_response");
const sequelize = new Sequelize("mysql::memory:");
const {Airport}= require('../models/index');
const {Airplane}= require('../models/index')
// console.log(Airport);
class Flight extends CrudRepository{
    constructor(){
        super(Flights);
    }
    async getflightinbetweenrepo({arrivalairport,departureairport,min=0,max=1e8,travllers=1,first,sort}){
      console.log(arrivalairport);
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
                    order:sort,
                    include: [
                        {
                            model:Airplane
                        },
                        {
                            model:Airport,
                            attributes:['name'],
                            as:'arrival_port',
                            on:{
                                col1:Sequelize.where(Sequelize.col('Flights.arrivalairportid'),"=",Sequelize.col('arrival_port.code'))

                            }
                        },
                        {
                            model:Airport,
                            attributes:['name'],
                           as:'departure_port',
                            on:{
                                col1:Sequelize.where(Sequelize.col('Flights.departureairportid'),"=",Sequelize.col('departure_port.code'))

                                
                            }
                        },
                       


                    ],
                    
                    
            
                    
                }
                
            );
            
            return flight
       } catch (error) {
            
            throw error
        
       }

    }
    

}
module.exports=Flight