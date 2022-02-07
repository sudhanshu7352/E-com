const mongoose =require("mongoose");

const userSchema =new mongoose.Schema(
    {
        firstName :{type:String,required:true},
        lastName :{type:String,required:true},
        age :{type:String,required:true},
        email :{type:String,required:true},
        address :{type:String,required:true},
        gender :{type:String,required:false,default:"Female"},
        type :{type:String,required:false,default:"customer"},

    },
    {
        versionKey:false,
        timestamps:true
    }
);

module.exports =mongoose.model("user",userSchema);
