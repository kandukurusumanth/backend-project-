const CrudRepository = require("./crud-repo");
const {Airport}= require('../models/index');


class airportrepo extends CrudRepository{
    constructor(){
        super(Airport);
    }


}
module.exports=airportrepo