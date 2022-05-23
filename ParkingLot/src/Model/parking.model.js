  
  
  
    const  mongoose  = require("mongoose");

    const parkingSchema=new mongoose.Schema({
      userId:{type:String,require:true},
    floor:{type:Number,require:true},
    ticket:{type:Boolean,require:true,default:false},
    capacity:{type:Number,require:true},
    floorSpots:{type:Number,require:true},
    vehicles:{type:String,require:true},
    price:{type:Number,require:true}

  });

  const Parking= mongoose.model('parks',parkingSchema);
  module.exports=Parking;