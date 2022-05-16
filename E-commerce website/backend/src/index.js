
const express =require("express")

const connect =require("./configs/db")

const app =express()
app.use(express.json())

const clothController =require("./controllers/cloth.controller")
const electronicController =require("./controllers/electronics.controller")
const applianceController =require("./controllers/appliances.controller")
const bookController =require("./controllers/books.controller")

app.use("/cloth",clothController)
app.use("/electronics",electronicController)
app.use("/appliances",applianceController)
app.use("/books",bookController)

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