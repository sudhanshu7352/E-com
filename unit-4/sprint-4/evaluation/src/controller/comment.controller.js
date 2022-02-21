const express = require("express");

const Comment =require("../model/comment.model")

const router = express.Router()

router.post("" ,async(req,res)=>{
    try{
      const comment =await Comment.create(req.body);

      return res.status(201).send(comment)
    }
    catch(err){
        res.status(500).send(err.message)
    }
} )
router.get("",async(req,res)=>{
    try{
       const comment = await Comment.find().lean().exec();
       return res.status(201).send(comment)
    }
    catch(e){
        res.status(500).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const comment =await Comment.findById(req.params.id).lean().exec()
        return res.status(201).send(comment)
    }
    catch(e){
        res.status(500).send(err.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const comment =await Comment.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        return res.status(201).send(comment)
    }
    catch(e){
        res.status(500).send(err.message)
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const comment =await Comment.findByIdAndDelete(req.params.id)
        return res.status(201).send(comment)
    }
    catch(e){
        res.status(500).send(err.message)
    }
})
module.exports =router