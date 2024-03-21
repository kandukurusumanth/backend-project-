const {airplanerepo}=require('../repo/index');
// console.log(airplanerepo);
const airplaereposervice= new airplanerepo();

async function createairplaeservice(data){
    try {
        // console.log(data);
        const repsone= await airplaereposervice.create(data);
        return repsone
        
    } catch (error) {
        throw error
        
    }

}
async function getoneairplane(data){
    try {
        
        
        const response = await airplaereposervice.get(data.id)
        
        return response
        
    } catch (error) {
        throw error
        
    }
}
async function getallairplane(){
    try {
        const repsone = await airplaereposervice.getAll();
        return repsone;
    } catch (error) {
        throw error
        
    }
}
async function updateairplane(data){
    try {
       
        const response = await airplaereposervice.update(data,data.id);
        
        return response;
    } catch (error) {
        throw error
   
    }
}
async function destroyairplane(data){
    try {
        const response=  await airplaereposervice.destroy(data.id);
        return response
    } catch (error) {
        throw error
        
    }
}
module.exports={
    createairplaeservice,
    getoneairplane,
    getallairplane,
    updateairplane,
    destroyairplane
}

