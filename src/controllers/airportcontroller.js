
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
module.exports={
    createairportcontroller,

}