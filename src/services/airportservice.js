const {airport} = require('../repo/index');
// const { error } = require('../utils/common/sucess_response');
// const { error } = require('../utils/common/sucess_response');
const airportservice= new airport();
async function createairportservice(data){
    try {
        const airport = await airportservice.create(data);
        return airport
    } catch (error) {
        throw error
        
    }

}

async function getallairport(){
    try {
        const airport = await airportservice.getAll();
        return airport
    } catch (error) {
        throw error
        
    }

}
async function getairport(data){
    try {
        // console.log(data.id.id);
        const airport = await airportservice.get(data.id.id);
        return airport
    } catch (error) {
        throw error
        
    }


}
async function deleteairport(data){
    try {
        console.log(data);
        const airport = await airportservice.destroy(data.id);
        return airport
    } catch (error) {
        throw error
        
    }

}
async function updateairport(data){
    try {
        
        const airport = await  airportservice.update(data,data.id);
        console.log(airport);
        if(airport===undefined) throw new Error('wrong updation')

        return airport 
    } catch (error) {
        throw error
        
    }

}

module.exports={
    createairportservice,
    getallairport,
    getairport,
    deleteairport,
    updateairport

}