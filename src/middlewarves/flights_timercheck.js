const {flightcontroller} = require('../controllers/index');
const {sucessresponse, errorresponse} = require('../utils/common/index');

function checktimer(req,res,next){
   
    if(req.body.arrivaldate>req.body.departuredate){
        errorresponse.message='make a valid time'
        return res.json({
            errorresponse
        })
    }
    next()
}
module.exports={checktimer}