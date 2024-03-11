const { airplanecontroller } = require("../controllers/index")


 async function checkairplane(req,res,next){
    if(!req.body.modelnumber || !req.body.seats){
        return res.json({
            success:"not ok",
            message:"you have missed something",

        })
    }
    next();

    

}

module.exports={
    checkairplane
}