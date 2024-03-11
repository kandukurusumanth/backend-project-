const express = require('express');
const { airplanecontroller } = require('../../controllers/index');
const { airplanemiddlewarve } = require('../../middlewarves/index');
const router = express.Router();

router.post('/', airplanemiddlewarve.checkairplane,airplanecontroller.createairplaecontroller)
router.get('/:id', airplanecontroller.getoneairplanecontoller);
router.get('/',airplanecontroller.getallairplanecontroller);
router.patch('/:id',airplanecontroller.updateairplanecontroller);
router.delete('/:id',airplanecontroller.destroyairplanecontroller);
module.exports= router
