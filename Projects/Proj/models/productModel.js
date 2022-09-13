const mongoose = require("mongoose")

const productSchema =  mongoose.Schema({
    id:Number,
    name: String,
    desc: String,
    category:String,
    price: Number,
    img: String

 })

 // Modal forEmployees
 const productsModel = new mongoose.model("products",productSchema)


 module.exports = productsModel