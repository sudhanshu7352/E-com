const express =require("express")

const Electronic =require("../model/electronics.model");

const router =express.Router()

router.post("",async (req,res)=>{
    try{
        const electronic =await Electronic.create(req.body);
        return res.status(200).send(electronic)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const electronic =await Electronic.find().lean().exec()

        return res.status(200).send(electronic)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.delete("/:id",async (req,res)=>{
    try{
      const electronic =await Electronic.findByIdAndDelete(req.params.id)

      return res.status(200).send(electronic)
    }
    catch(error){
      return res.status(500).send(error.message)
    }
})
module.exports =router