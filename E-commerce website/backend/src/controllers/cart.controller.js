const express =require("express")

const Cart =require("../model/cart.model");

const router =express.Router()

router.post("",async (req,res)=>{
    try{
        const cart =await Cart.create(req.body);
        return res.status(200).send(cart)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const cart =await Cart.find().lean().exec()

        return res.status(200).send(cart)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.delete("/:id",async (req,res)=>{
    try{
      const cart =await Cart.findByIdAndDelete(req.params.id)

      return res.status(200).send(cart)
    }
    catch(error){
      return res.status(500).send(error.message)
    }
})
module.exports =router