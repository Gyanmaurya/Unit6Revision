

  const express=require('express');
  const router=express.Router();
  const Parking=require('../Model/parking.model')

   router.post('/createticket',async(req,res)=>{



    try {
      const park=await Parking.create(req.body);
      res.status(200).send({park:park});
      
    } catch (error) {
      res.status.send({error:error})
    }
    

   })
   router.get('/createticket/:id',async(req,res)=>{



    try {
      const park=await Parking.findById(req.params.id);
      const price=park.price;
      res.status(200).send({Price:price});
      
    } catch (error) {
      res.status.send({error:error})
    }
    

   })
 



  module.exports=router;