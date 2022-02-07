const express =require("express");

const connect = require("./configs/db");

const userController = require("./controller/user.controller");



const app =express();

app.use(express.json());

app.use("/users",userController);


app.listen(2345,async(req,res)=>{
    try{
     await connect();
     console.log("running on port 2345")
    }
    catch(e){
     console.log(e.message)
    }
})