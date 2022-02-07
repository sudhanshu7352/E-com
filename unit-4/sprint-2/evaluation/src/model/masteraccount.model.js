const mongoose =require("mongoose");
const user =require("./user.model")

const masterSchema =new mongoose.Schema(
    {
       
        balance :{type :Number,required:true},
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "user",
            require:true,
        }
        

    },
    {
        versionKey:false,
        timestamps:true
    }
);

module.exports =mongoose.model("master",masterSchema);