const express = require('express');
const { StatusCodes } = require('http-status-codes');

const info = (req,res)=>{
    console.log("recived mesage");
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