const {airport} = require('../repo/index');
const airportservice= new airport();
async function createairportservice(data){
    try {
        const airport = await airportservice.create(data);
        return airport
    } catch (error) {
        throw error
        
    }

}
module.exports={
    createairportservice,

}