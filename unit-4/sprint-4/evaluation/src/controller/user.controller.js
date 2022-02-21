const express = require("express");

const User =require("../model/user.model")

const router = express.Router()

router.post("/user" ,async(req,res)=>{
    try{

    }
    catch(err){
        res.status(500).send(err.message)
    }
} )