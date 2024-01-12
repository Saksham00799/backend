import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true,    
    },view:{
        type:Number,
        required:true,     
    },
    isPublished:{
        type:Boolean,
        default:true,     
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    views:{
                type:Number,
        required:true,     
    }

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = new mongoose.Model("Video", userSchema)