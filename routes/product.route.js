const express = require('express')
const productController = require("../controllers/product.controller")
const router = express.Router()

router.get('/', productController.getProducts)
router.post('/', productController.postProducts)
router.get('/:id', productController.getProductById)
router.put('/:id', productController.updateProductById)
router.delete('/:id', productController.deleteProductById)

module.exports = router