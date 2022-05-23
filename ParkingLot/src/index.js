const express=require('express');
const app=express();
const port=process.env.PORT || 5000;
const connectDB=require('./config/db')

app.use(express.json());
const cors=require('cors');
app.use(cors())

const userController=require('./Controller/auth')
app.use('/',userController)
const parkController=require('./Controller/parking.controller');
app.use('/',parkController)









app.listen(port,async()=>{
try {
   await connectDB()
   console.log('This server is running')
} catch (error) {
    console.log("Error",error)
}


    
})