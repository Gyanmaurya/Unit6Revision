   
   const mongoose=require('mongoose');

   const connectDB=()=>{
     return  mongoose.connect('mongodb+srv://gyan:gyan@cluster0.nm8vq.mongodb.net/dotNetData',{useNewUrlParser: true , useUnifiedTopology: true })
   }
    module.exports=connectDB;