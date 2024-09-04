import mongoose from 'mongoose';
export const Connection = async () =>{
    const URL='mongodb://roypriyanshu30:roy246810@ac-ddapvgm-shard-00-00.lhhia3p.mongodb.net:27017,ac-ddapvgm-shard-00-01.lhhia3p.mongodb.net:27017,ac-ddapvgm-shard-00-02.lhhia3p.mongodb.net:27017/PROJECT1?ssl=true&replicaSet=atlas-bnokwi-shard-0&authSource=admin&retryWrites=true&w=majority';
    try{    
     await mongoose.connect(URL,{ useunifiedTopology:true, useNewUrlParser:true});
     console.log('database connected succesfully');
    }catch(error){
        console.log('error while connecting',error.message);
    }
}
export default Connection;