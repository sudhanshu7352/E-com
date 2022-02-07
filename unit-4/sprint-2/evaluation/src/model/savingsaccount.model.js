const mongoose =require("mongoose");
const user =require("./user.model");
const branch =require("./branchdetails.model")

const savingSchema =new mongoose.Schema(
    {
       account_number :{type:Number,required:true,unique:true},
        balance :{type :Number,required:true},
        interestRate :{type :Number,required:true},
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "user",
            require:true,
        },
        branch:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "branch",
            require:true,
        }

    },
    {
        versionKey:false,
        timestamps:true
    }
);

module.exports =mongoose.model("saving",savingSchema);