const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    
    firstName :{type:String,required:true},
    age :{type:Number,required:true},
    email :{type :String,required:true,unique:true},
    profileImages :[{type:String,required:true}],
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required :true,
    },
    comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
        required :true,
    },

},{
    versionKey:false,
    timestamps:true,
})

module.exports =mongoose.model("user" ,userSchema);
