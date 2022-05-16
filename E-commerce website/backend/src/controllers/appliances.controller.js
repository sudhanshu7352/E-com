const express =require("express")

const Appliance =require("../model/cloth.model");

const router =express.Router()

router.post("",async (req,res)=>{
    try{
        const appliance =await Appliance.create(req.body);
        return res.status(200).send(appliance)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const appliance =await Appliance.find().lean().exec()

        return res.status(200).send(appliance)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.delete("/:id",async (req,res)=>{
    try{
      const appliance =await Appliance.findByIdAndDelete(req.params.id)

      return res.status(200).send(appliance)
    }
    catch(error){
      return res.status(500).send(error.message)
    }
})
module.exports =router