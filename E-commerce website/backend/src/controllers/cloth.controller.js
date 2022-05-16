const express =require("express")

const Cloth =require("../model/cloth.model");

const router =express.Router()

router.post("",async (req,res)=>{
    try{
        const cloth =await Cloth.create(req.body);
        return res.status(200).send(cloth)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const cloth =await Cloth.find().lean().exec()

        return res.status(200).send(cloth)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.delete("/:id",async (req,res)=>{
    try{
      const cloth =await Cloth.findByIdAndDelete(req.params.id)

      return res.status(200).send(cloth)
    }
    catch(error){
      return res.status(500).send(error.message)
    }
})
module.exports =router