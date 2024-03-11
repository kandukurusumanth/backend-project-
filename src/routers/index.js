const express = require('express');
const router = express.Router();
const app= express();
const v1=require('./v1/index')
router.use('/v1',v1)

module.exports=router