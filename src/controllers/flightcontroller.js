const {flightservice} = require('../services/index');
const {sucessresponse, errorresponse} = require('../utils/common/index');
async function createflightcontroller(req,res){
    try {
        const flight = await flightservice.createflightservice({
            Flightsnumber:req.body.Flightsnumber,
            airplaneid:req.body.airplaneid,
            arrivalairportid:req.body.arrivalairportid,
            departureairportid:req.body.departureairportid,
            arrivaldate:req.body.arrivaldate,
            departuredate:req.body.departuredate,
            price:req.body.price,
            totalseats:req.body.totalseats

        })
        sucessresponse.data=flight;
        return res.json({
            sucessresponse
        })
    } catch (error) {
        throw error
        
    }
}
async function getflightcontroller(req,res){
    try {
        
        const flight = await flightservice.getallflight({
            trip:req.query.trip,
            price:req.query.price,
            travllers:req.query.travllers,
            sort:req.query.sort
        });
        sucessresponse.data= flight
        res.json({
            sucessresponse
        })
    } catch (error) {
        throw error
        
    }
}
async function getflightcontrollerbyid(req,res){
    try {
        const flight = await flightservice.getflight({
            id:req.params.id
        })
        sucessresponse.data=flight
        res.json({
            sucessresponse
        })
    } catch (error) {
        errorresponse.error=error.message
        res.json({
            errorresponse
        })
        throw error
        
    }
}

async function deleteflightcontroller(req,res){
    try {
        const flight  = await flightservice.deleteflight({
            id:req.params.id
        })
        sucessresponse.data=flight
        res.json({
            sucessresponse
        })
    } catch (error) {
        errorresponse.error= error.message
        res.json({
            errorresponse
        })
        throw error
        
    }
}
async function updateflightcontroller(req,res){
    try {
        const flight  = await flightservice.updateflight({
            Flightsnumber:req.body.Flightsnumber,
            airplaneid:req.body.airplaneid,
            arrivalairportid:req.body.arrivalairportid,
            departureairportid:req.body.departureairportid,
            arrivaltime:req.body.arrivaltime,
            departuretime:req.body.departuretime,
            price:req.body.price,
            totalseats:req.body.totalseats,
            id:req.params.id
        })
        sucessresponse.data=flight
        res.json({
            sucessresponse
        })
    } catch (error) {
        errorresponse.error= error.message
        res.json({
            errorresponse
        })
        throw error
        
    }
}
async function flightinbetween(req,res){
    try {
        const flight=await flightservice.getflightinbetween({
            arrivalairport:req.params.arrivalairport,
            departureairport:req.params.departureairport
        })
        sucessresponse.data=flight
        return res.json({
            sucessresponse
        })
        
    } catch (error) {

        return res.json({
            errorresponse
        })
        throw error
    }

}
module.exports={
    createflightcontroller,
    getflightcontroller,
    getflightcontrollerbyid,
    deleteflightcontroller,
    updateflightcontroller,
    flightinbetween
}