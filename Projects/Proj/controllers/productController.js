const products = require("../models/productModel")


class Products {
    static test = (req, res) => {
        console.log("testing")
        res.send("works")
    }

    static create = async (req, res) => {

        let product = await products.create(req.body)

        res.status(201).json({
            status: "success",
            product: product,
            message: "Products Created Success",
        })
    }

    static getAll = async(req,res) =>{
        let allproducts = await products.find()
        
            res.status(200).json({
                status: "success",
                products : allproducts
            })
        }

    static update =  async (req,res)=>{
        let prod = await products.findById(req.params.id)
        if(!prod){
            return res.status(404).json({
                message: "Product Not Found",
            })
        }
        let prodUpd = await products.findByIdAndUpdate(req.params.id,req.body,{
    
            new: true,
            runValidators: true
    
        })
        res.status(201).json({
            status: "success",
            messages:"Product Updated",
            product: prodUpd
        })
    }

    static delete = async(req,res)=>{
        let prod = await products.deleteOne({_id:req.params.id})
        if(prod.deletedCount ==0){
            return  res.status(404).json({  
                status: "NOT Found",
            messages    : "Such Product dosn't exist",
               
            })
            
        }
        res.status(200).json({  
            status: "success",
            product:prod
        })
    
    }
    static deleteAll = async(req,res)=>{
        let prod = await products.deleteMany()
        if(prod.deletedCount ==0){
            return  res.status(404).json({  
                status: "NOT Found",
            messages    : "Such Product dosn't exist",
               
            })
            
        }
        res.status(200).json({  
            status: "success",
            product:prod
        })
    
    }

    static get = async(req,res) =>{
        let prod = await products.find({_id:req.params.id})
        
            res.status(200).json({
                status: "success",
                product:prod
            })
        }
}


module.exports = Products
