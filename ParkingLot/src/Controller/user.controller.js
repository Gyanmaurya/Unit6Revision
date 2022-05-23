
   

     const express=require('express');

     const router=express.Router();
     const User=require('../Model/user.model')
     const Parking=require('../Model/parking.model')

     router.put('/user/:id',async()=>{

     try {
         const park=await Parking.findById(req.params.id);
         const user=await User.findById(park.userId);
         if(user.userType==="admin" ||user.userType==="Parking assistant"){
             try {
                 const updateTicket= await Parking.findByIdAndUpdate(req.params.id);
                 res.status(200).send({updateTicket:updateTicket})
             } catch (error) {
                 res.status(400).send("Only admin and Parking assistant can change the details")
             }
         }
     } catch (error) {
        res.status(400).send('id not found');
     }


     })
  