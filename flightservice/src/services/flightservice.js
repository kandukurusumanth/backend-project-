const { where } = require('sequelize');
const {Flight} = require('../repo/index');
const {Op} = require('sequelize') 

// const { error } = require('../utils/common/sucess_response');
// const { error } = require('../utils/common/sucess_response');
const flightservice= new Flight();
async function createflightservice(data){
    try {
        const flight = await flightservice.create(data);
        return flight
    } catch (error) {
        throw error
        
    }

}

async function getallflight(data){

    try {
        console.log(data.travllers);
        let fliterflight;
        let fliterobj={};
        if(data.trip){
           
            const [arrivalairport,departureairport]= data.trip.split('-');
            fliterobj.arrivalairport=arrivalairport,
            fliterobj.departureairport=departureairport

        }
        if(data.name){
            fliterobj.name=data.name
        }
        if(data.price) {
            let [min,max] = data.price.split('-');
            if(max===undefined){
                max=min;
                min=0;
            }
            fliterobj.min=min
            fliterobj.max=max

        }
        if(data.travllers){
            fliterobj.travllers=data.travllers
        }
        if(data.sort){
            const params = data.sort.split(',');
            
            let arr=params.map((obj)=>{
                return obj.split('_')
            })

            fliterobj.sort=arr;
            

        }
        if(!Object.keys(fliterobj).length) {
            fliterflight=await flightservice.getAll();
            
            
           
        }
        else {
            fliterflight= await flightservice.getflightinbetweenrepo(fliterobj);
            
        }
        

        return fliterflight
    } catch (error) {
        throw error
        
    }

}
async function getflight(data){
    try {
        // console.log(data.id.id);
        const flight = await flightservice.get(data.id.id);
        return flight
    } catch (error) {
        throw error
        
    }


}
async function deleteflight(data){
    try {
        
        const flight = await flightservice.destroy(data.id);
        return flight
    } catch (error) {
        throw error
        
    }

}
async function updateflight(data){
    try {
        
        const flight = await  flightservice.update(data,data.id);
       
        if(flight===undefined) throw new Error('wrong updation')

        return flight 
    } catch (error) {
        throw error
        
    }

}

module.exports={
    createflightservice,
    getallflight,
    getflight,
    deleteflight,
    updateflight,
   

}