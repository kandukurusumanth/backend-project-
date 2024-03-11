const crudrepo= require('./crud-repo');

const {Airplane} = require('../models/index');



class airplanerepo extends crudrepo{
    constructor(){
        super(Airplane);
    }

}
module.exports=
    airplanerepo
