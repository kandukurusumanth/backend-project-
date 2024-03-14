const {city} = require('../repo/index');
const cityservice= new city();
async function createcity(data){
    try {
        const city = await cityservice.create(data);
        return city
    } catch (error) {
        throw error
        
    }
}
async function getallcity(){
    try {
        const city = await cityservice.getAll();
        return city
    } catch (error) {
        throw error;
    }
}
async function getcitybyid(data){
    try {
        const city = cityservice.get(data.id)
        return city
    } catch (error) {
        throw error
        
    }
}
async function deletecity(data){
    try {
        const city= await cityservice.destroy(data.id);
        return city
    } catch (error) {
        throw error
        
    }
}
async function updatecity(data){
    try {
        const city= await cityservice.update(data,data.id);
        return city
    } catch (error) {
        throw error
        
    }
}
module.exports={
    createcity,
    getallcity,
    getcitybyid,
    deletecity,
    updatecity
}