
const express =require("express")

const connect =require("./configs/db")

const app =express()
app.use(express.json())

const clothController =require("./contro")

const port =process.env.PORT || 3011

app.listen(port,async()=>{
    try{
       await connect()
       console.log(`running on port ${port}`)
    }
    catch(e){
      console.log(e.message)
    }
})