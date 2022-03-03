const post =(model)=>async(req,res)=>{
    try{
        const item =await model.create(req.body)
        res.send(item)
    }
    catch(e){
        return res.status(500).send(e.message)
    }
}
const get =(model)=>async (req,res)=>{
    try{
       const items = await model.find().lean().exec()
       res.send(items)
    }
    catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports =(model)=>{
    return{
        post:post(model),
        get :get(model),
    }
}