const express = require('express');



const router= express.Router();
// console.log('ok from index.js of router of v1');
const infocontroller = require('./info');
const airplane = require('./airplaerouter');
router.use('/',infocontroller)
router.use('/airplane',airplane)

module.exports=router


