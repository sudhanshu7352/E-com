const mongoose =require("mongoose")

const bookSchema = new mongoose.Schema(
    {
        "image":{type:String,required:true},
        "category":{type:String,required:true},
        "size":{type:String,required:true},
        "name":{type:String,required:true},
         "desc" :{type:String,required:true},
         "price" :{type:String,required:true},

    },
    {
        versionKey:false,
        timestamps:true,
    }
)
module.exports =mongoose.model("book",bookSchema)