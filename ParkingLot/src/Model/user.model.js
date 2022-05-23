

   const mongoose=require('mongoose')

   const userSchema=new mongoose.Schema({
     
    username:{type:String,require:true},
    email:{type:String,require:true , unique:true ,max:50},
    password:{type:String,require:true,min:6,max:16},
    userType:{type:String,require:true ,default:"admin"}

   })
   const User=mongoose.model("users",userSchema);
   module.exports=User;
