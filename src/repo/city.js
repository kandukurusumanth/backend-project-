const CrudRepository = require("./crud-repo");
const {City} = require('../models/index');
class city extends CrudRepository{
    constructor(){
        super(City);
    }

}
module.exports=city