

 const User=require('../Model/user.model');

 const router = require("express").Router();

 const bcrypt = require('bcrypt');

 const req = require('express/lib/request');


  router.post('/register',async(req,res)=>{

    try {
        const salt=10;
        const hashPassword=await bcrypt.hash(req.body.password,salt);
        const user= new User({
        username:req.body.username,
        email:req.body.email,
        password:hashPassword,
        userType:req.body.userType
        })
        const newUser=await user.save();
        res.status(200).json(newUser);

    } catch (error) {
        res.status(500).json(error)
    }

  })

  router.post('/login',async(req,res)=>{

    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");
    
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")
    
        res.status(200).json(user)
      } catch (err) {
        res.status(500).json(err)
      }

  });












  module.exports=router;