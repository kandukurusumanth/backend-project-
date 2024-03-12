const express = require('express');



const router= express.Router();
// console.log('ok from index.js of router of v1');
const infocontroller = require('./info');
const airplane = require('./airplaerouter');
const  airport  = require('./airportrouter');
router.use('/',infocontroller)
router.use('/airplane',airplane)
router.use('/airport',airport)

module.exports=router


