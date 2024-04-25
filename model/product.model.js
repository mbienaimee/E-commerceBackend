import mongoose from 'mongoose';
import { type } from 'os';

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:'category',
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    isFeatured:{
        type:Boolean,
        required:true
    }
},{timestamps:true})
const productModel = mongoose.model("product",productSchema)
export default productModel