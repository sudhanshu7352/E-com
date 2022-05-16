const express =require("express")

const Book =require("../model/cloth.model");

const router =express.Router()

router.post("",async (req,res)=>{
    try{
        const book =await Book.create(req.body);
        return res.status(200).send(book)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const book =await Book.find().lean().exec()

        return res.status(200).send(book)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.delete("/:id",async (req,res)=>{
    try{
      const book =await Book.findByIdAndDelete(req.params.id)

      return res.status(200).send(book)
    }
    catch(error){
      return res.status(500).send(error.message)
    }
})
module.exports =router