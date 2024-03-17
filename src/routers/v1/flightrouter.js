const express = require('express');
const { flightcontroller } = require('../../controllers/index');
const { flightmiddlewarve } = require('../../middlewarves');
const router = express.Router();
router.post('/',flightmiddlewarve.checktimer,flightcontroller.createflightcontroller);
router.get('/', flightcontroller.getflightcontroller);
router.get('/:id', flightcontroller.getflightcontrollerbyid);
router.delete('/:id', flightcontroller.deleteflightcontroller);
router.patch('/:id', flightcontroller.updateflightcontroller);

module.exports=router