
class CrudRepository{
   
    constructor(model){
        this.model=model;
        
        

    }
    
    
    
    async create(data){
       
        const response = await this.model.create(data);
        
        
        if(!response){
            throw new AppError("the creating   you are doing is out of bounce", StatusCodes.NOT_FOUND);
        } 
        return response;
        
        
    


    }
    async destroy(data){
        
        const response = await this.model.destroy({
            where:
            {
                id:data
            }
        });
        
        if(response==0) {
           
            throw error
        }
        
        return response



    }
    async get(data){
        
       
        const response = await this.model.findByPk(data);
        
        if(!response) throw error
        return response;
        
        


    }
    async getAll(){
        
        const response = await this.model.findAll();
       
        if(!response) throw error
        return response;
        
        


    }
    async update(data,id){
        
        const response = await this.model.update(data,{
            where:{
                id:id
            }
        });
        
        
        if(response==0) throw error
        return response;
        
        


    }
}

module.exports=CrudRepository;