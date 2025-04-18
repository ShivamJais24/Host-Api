const mongoose =require("mongoose");

const productSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],
    },
    feature:{
        type:Boolean,
        default:false,
    },
    ratings:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company :{
        type:String,
        enum:{
            values:["apple","dell","samsung","mi"],
            message:`{VALUE} is not supported`,
        },
    },
});



module.exports = mongoose.model('Product',productSchema);

