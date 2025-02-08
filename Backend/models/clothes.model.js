import mongoose, { Collection } from "mongoose";

const clothesSchema =new mongoose.Schema({
    typeOfClothing:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    condition:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    collectionAddress:{
        type:String,
        required:true,
    },
    additionalNote:{
        type:String,
        required:true,
        default:" ",
    },
    userId:{
        type:String,
        required:true,
    }
},{timestamp:true});

const Clothes=mongoose.model('Clothes',clothesSchema);

export default Clothes;