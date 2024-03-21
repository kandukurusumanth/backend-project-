const express = require('express');
const { citycontroller } = require('../../controllers/index');
const router = express.Router();

router.post('/',citycontroller.createcitycontroller);
router.get('/', citycontroller.getcitycontroller);
router.get('/:id', citycontroller.getcitycontrollerbyid);
router.delete('/:id', citycontroller.deletecitycontroller);
router.patch('/:id', citycontroller.updatecitycontroller)
module.exports=router