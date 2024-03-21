const {cityservice} = require('../services/index');
const {sucessresponse, errorresponse} = require('../utils/common/index');
async function createcitycontroller(req,res){
    try {
        const city = await cityservice.createcity({
            name:req.body.name
        })
        sucessresponse.data=city;
        return res.json({
            sucessresponse
        })
    } catch (error) {
        throw error
        
    }
}
async function getcitycontroller(req,res){
    try {
        const city = await cityservice.getallcity();
        sucessresponse.data= city
        res.json({
            sucessresponse
        })
    } catch (error) {
        throw error
        
    }
}
async function getcitycontrollerbyid(req,res){
    try {
        const city = await cityservice.getcitybyid({
            id:req.params.id
        })
        sucessresponse.data=city
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
async function deletecitycontroller(req,res){
    try {
        const city  = await cityservice.deletecity({
            id:req.params.id
        })
        sucessresponse.data=city
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
async function updatecitycontroller(req,res){
    try {
        const city  = await cityservice.updatecity({
            name:req.body.name,
            id:req.params.id
        })
        sucessresponse.data=city
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
module.exports={
    createcitycontroller,
    getcitycontroller,
    getcitycontrollerbyid,
    deletecitycontroller,
    updatecitycontroller
}