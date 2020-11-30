const { Router } = require('express')
const ProductController = require('../controllers/ProductController')
const SkuController = require('../controllers/SkuController')

const router = Router()

router.get('/product/get', ProductController.showAllProducts),
router.get('/product/:id', ProductController.showOneProduct),
router.post('/product', ProductController.createProduct),
router.put('/product/:id', ProductController.updateProduct),
router.delete('/product/:id', ProductController.deleteProduct),


router.get('/sku/get', SkuController.showAllSkus),
router.get('/sku/:sku', SkuController.showOneSku),
router.get('/product/teste', ProductController.getOneProduct)



module.exports = router