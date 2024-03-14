const { response } = require('express');
const {airplaneservice} = require('../services/index');
async function createairplaecontroller(req,res){
    console.log('came to middlewarve');
    try {
        const airplane = await airplaneservice.createairplaeservice({
            modelnumber:req.body.modelnumber,
            seats:req.body.seats
        })
        
        return res.json({
            sucess:true,
            message:'done',
            data:airplane
        })
        
    } catch (error) {
        console.log(error);
        throw error
        
    }
}
async function getoneairplanecontoller(req,res){
    try {
        const repsone = await airplaneservice.getoneairplane({
            id:req.params.id
        
        })
        return res.json({
            sucess:true,
            message:'got the data',
            data:repsone

        })
    } catch (error) {
        
        throw error
        
    }

}
async function getallairplanecontroller(req,res){
    try {
        const response = await airplaneservice.getallairplane()
        return res.json({
            sucess:true,
            message:'done',
            data:response

        })
    } catch (error) {
        throw error
    }
}
async function updateairplanecontroller(req,res){
    try {
        const repsone = await airplaneservice.updateairplane({
            seats:req.body.seats,
           
            id:req.params.id
            
        });
        
        return res.json({
            sucess:true,
            message:'done',
            data:repsone
        })
        
    } catch (error) {
        throw error
    }
}
async function destroyairplanecontroller(req,res){
    try {
        const response = await airplaneservice.destroyairplane({
            id:req.params.id

        })
        res.json({
            suceess:true,
            message:'ok deleted the airplane',
            data:response
        })
    } catch (error) {
        throw error
    }
}
module.exports={
    createairplaecontroller,
    getoneairplanecontoller,
    getallairplanecontroller,
    updateairplanecontroller,
    destroyairplanecontroller
}