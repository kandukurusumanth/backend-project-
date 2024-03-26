const express = require('express');
const app= express();
const server=require('./config/index');
const apirouter = require('./routers/index');
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use('/api',apirouter)
app.use('/flightservice/api', apirouter)

app.listen(server.config.PORT,()=>{
    
    console.log(`listening to portnumber ${server.config.PORT}`);
})



