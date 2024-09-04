import User from '../model/user-schema.js';
export const usersignup = async (request, response)=>{
    try{
     const exist=await User.findOne({username: request.body.username});
     if(exist){
       return response.status(401).json({message:'username aldready exists'});
     }
     const user=request.body;
     const newuser=new User(user);
     await newuser.save();
     response.status(200).json({message:user});
    }catch (error){
      console.log('error while saving data',error);
    }
}
export const userlogin= async (request, response)=>{
    try{
        const details=request.body;
        console.log(details);
        const obj=await User.findOne({email:details.email,password:details.passwords});
        response.status(200).json({message:obj});
    }
    catch(error){
         console.log(error);
    }
}