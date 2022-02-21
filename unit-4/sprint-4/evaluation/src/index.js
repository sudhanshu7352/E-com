const express =require("express");

const connect =require('./configs/db')

const userController =require("./controller/user.controller")
const commentController =require("./controller/comment.controller")
const postController =require("./controller/post.controller")

const app =express()

app.use(express.json())

app.use("/users",userController)
app.use("/comment",commentController)
app.use("/post",postController)

app.listen(2323, async()=>{
    try{
        await connect()

        console.log("running on port 2323")
    }catch(e){
        console.log(e.messge)
    }
})