const express = require('express');
const { airportcontroller } = require('../../controllers/index');
const router = express.Router();
router.post('/',airportcontroller.createairportcontroller);
router.get('/',airportcontroller.getairportcontroller);
router.get('/:id', airportcontroller.getairportcontrollerbyid);
router.patch('/:id', airportcontroller.updateairportcontroller);
router.delete('/:id', airportcontroller.deleteairportcontroller);
module.exports= router