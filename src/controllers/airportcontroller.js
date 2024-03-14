
const {airportservice} = require('../services/index');
const{sucessresponse} = require('../utils/common/index');
const {errorresponse} = require('../utils/common/index');
const {StatusCodes}= require('http-status-codes');
async function createairportcontroller(req,res){
    try {
        const airport = await airportservice.createairportservice({
            name:req.body.name,
            code:req.body.code,
            cityid:req.body.cityid

        })
      
        sucessresponse.data={airport}

        return res.json({
            sucessresponse
        })
    } catch (error) {
        errorresponse.error=null;
        let errors= error.errors
        errors.forEach(element => {
            
            if(element.message){
                errorresponse.error=element.message

            }
            
        });
       
        res.status(StatusCodes.BAD_REQUEST).json({
            errorresponse
        })

        throw error
        
    }
}
async function getairportcontroller(req,res){
    try {
        const airport = await airportservice.getallairport();
        sucessresponse.data=airport
        return res.json({
            sucessresponse
        })
    } catch (error) {
        errorresponse.error=null;
        let errors= error.errors
        errors.forEach(element => {
            
            if(element.message){
                errorresponse.error=element.message

            }
            
        });
       
        res.status(StatusCodes.BAD_REQUEST).json({
            errorresponse
        })

        throw error
        
    }
}
async function getairportcontrollerbyid(req,res){
    try {
        const airport = await airportservice.getairport({
            id:req.params
        });
        sucessresponse.data=airport
        return res.json({
            sucessresponse
        })
    } catch (error) {
        
        errorresponse.error  = error.message
        res.status(StatusCodes.BAD_REQUEST).json({
            errorresponse
        })

        throw error
        
    }
}
async function deleteairportcontroller(req,res){
    try {
        const airport = await airportservice.deleteairport({
           
            id:req.params.id
        });
        sucessresponse.data=airport
        return res.json({
            sucessresponse
        })
    } catch (error) {
       
       errorresponse.message=error.message
        res.status(StatusCodes.BAD_REQUEST).json({
            errorresponse
        })

        throw error
        
    }
}
async function updateairportcontroller(req,res){
    try {
        const airport = await airportservice.updateairport({
            name:req.body.name,
            id:req.params.id
        });
       
        sucessresponse.data=airport
        return res.json({
            sucessresponse
        })
        
    } catch (error) {
        
        
        errorresponse.message=error.message
        res.status(StatusCodes.BAD_REQUEST).json({
            errorresponse
        })

        throw error
        
    }
}
module.exports={
    createairportcontroller,
    getairportcontroller,
    getairportcontrollerbyid,
    deleteairportcontroller,
    updateairportcontroller


}