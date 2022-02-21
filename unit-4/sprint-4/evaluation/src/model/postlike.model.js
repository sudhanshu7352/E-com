const mongoose =require("mongoose")

const postLikeSchema = new mongoose.Schema({
 
  post_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"post",
      required :true,
  },
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required :true,
}
    
},{
    versionKey:false,
    timestamps:true,
})
module.exports =mongoose.model("postLike",postLikeSchema)