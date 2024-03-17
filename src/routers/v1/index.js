const express = require('express');



const router= express.Router();
// console.log('ok from index.js of router of v1');
const infocontroller = require('./info');
const airplane = require('./airplaerouter');
const  airport  = require('./airportrouter');
const city = require('./cityrouter');
const flight = require('./flightrouter');
router.use('/',infocontroller)
router.use('/airplane',airplane)
router.use('/airport',airport)
router.use('/city',city)
router.use('/flight',flight)

module.exports=router


