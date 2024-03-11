const express = require('express');
const { StatusCodes } = require('http-status-codes');

const info = (req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        content:'api is live',
        error:{},
        start:'good to start'
        
    })

}

module.exports={
    info
}