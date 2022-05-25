
const express =require("express")
const  cors = require("cors")
const connect =require("./configs/db")

const app =express()
app.use(express.json())
app.use(cors())
const clothController =require("./controllers/cloth.controller")
const electronicController =require("./controllers/electronics.controller")
const applianceController =require("./controllers/appliances.controller")
const bookController =require("./controllers/books.controller")
const cartController =require("./controllers/cart.controller")

app.use("/cloth",clothController)
app.use("/electronics",electronicController)
app.use("/appliances",applianceController)
app.use("/books",bookController)
app.use("/cart",cartController)
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