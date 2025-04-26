const Product = require("../models/product.model")

const getProducts = async(req, res) => {
    try {
   const products = await Product.find()
   res.send(products)
    }
    catch(error) {
      res.status(500)  
    }
}

const postProducts = async (req, res) => {
    console.log("bkjd",req.body, req.params, req.headers);
    try{
        const product = await Product.create(req.body)
        res.send(product)
        console.log(req.body)
    }
    catch(error){
       res.status(500)
    }

}


const getProductById =  async(req, res) => {
    const {id} = req.params
    try {
   const product = await Product.findById(id)
   res.send(product)
    }
    catch(error) {
      res.status(500)  
    }
}


const updateProductById = async(req, res) => {
try {
    const {id} = req.params
   const updateProduct = await Product.findByIdAndUpdate(id, req.body);
   if(!updateProduct) {
    return res.status(404).json({message: "Product not found"})
   }
    res.send(updateProduct)
}
catch(error) {
    res.status(500)
}
}


const deleteProductById = async(req, res) => {
    try {
   const {id} = req.params
   const deletePrd = await Product.findByIdAndDelete(id)
   res.send(deletePrd)
    }
    catch(error) {
        res.status(500)
    }
}


module.exports = {getProducts, postProducts, getProductById, updateProductById, deleteProductById}