import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20,
        unique:true
    },
    username:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true
    },
    phoneno:{
       type:String,
       required:true
    }
})
const User=mongoose.model('user',userSchema);
export default User;