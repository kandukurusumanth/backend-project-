const express = require('express');
const router = express.Router();
const infocon = require('../../controllers/index');

router.get('/info', infocon.infocontroller.info)
module.exports=router