import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please Provide a valid Product name"],
        unique:true
    },
    author:{
        type:String,
        require:[true,"please Provide a valid email"],
        unique:true,
    },
    language:{
        type:String,
        require:[true,"Please Provide a strong Password"],
    },
    page:{
        type:Number,
        required:[true,"Please provise page number"]
        
    },
    actualPrice:{
        type:Number,
        required:[true,"Please Provise Valid Price"]
    },
    sellingPrice:{
        type:Number,
        required:[true,"Please Provide a valid Price"]
    },
    about:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    Image:{
        type:Object,
        required:true
    },
    catogery:{
        type:String
    }
})

const Product=mongoose.model.Product || mongoose.model("Product",productSchema);
export default Product;