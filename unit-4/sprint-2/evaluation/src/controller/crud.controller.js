const post =(model)=>async(req,res)=>{
    try{
        const item =model.create(req.body)
        res.send(item)
    }
    catch(e){
        return res.status(500).send(e.message)
    }
}