const express = require('express');
const { airportcontroller } = require('../../controllers/index');
const router = express.Router();
router.post('/',airportcontroller.createairportcontroller);
module.exports= router