const express=require("express");
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/addressLocatorDB",{useNewUrlParser:true})

const addressSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
    address: {
      type:String,
      required:true
  },
  location:
    {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String    }
})
