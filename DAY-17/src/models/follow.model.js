const mongoose =require('mongoose')

const followSchema =new mongoose.Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"uses",
        required:[true,"Follower is required"]
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"uses",
        required:[true,"Followee is required"]
    }
},{
        timestamps:true
    })

    const followModel= mongoose.model("follow", followSchema)

    module.exports= followModel