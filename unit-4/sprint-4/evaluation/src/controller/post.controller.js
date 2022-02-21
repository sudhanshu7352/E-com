const express = require("express");

const Post =require("../model/post.model")

const router = express.Router()

router.post("" ,async(req,res)=>{
    try{
      const post =await Post.create(req.body);

      return res.status(201).send(post)
    }
    catch(err){
        res.status(500).send(err.message)
    }
} )
router.get("",async(req,res)=>{
    try{
       const post = await Post.find().lean().exec();
       return res.status(201).send(post)
    }
    catch(e){
        res.status(500).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const post =await Post.findById(req.params.id).lean().exec()
        return res.status(201).send(post)
    }
    catch(e){
        res.status(500).send(err.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const post =await Post.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        return res.status(201).send(post)
    }
    catch(e){
        res.status(500).send(err.message)
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const post =await Post.findByIdAndDelete(req.params.id)
        return res.status(201).send(post)
    }
    catch(e){
        res.status(500).send(err.message)
    }
})
module.exports =router