const express = require('express');
const app= express();
const server=require('../src/config/index');

app.listen(server.config.PORT,()=>{
    
    console.log(`listening to portnumber ${server.config.PORT}`);
})

