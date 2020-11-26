const { Router } = require("express")
const ProductController = require('../controllers/ProductController')

const router = Router()

router.get('/product', ProductController.showAllProducts),
router.get('/product/:id', ProductController.showOneProduct),
router.post('/product', ProductController.creatProduct),
router.put('/product/:id', ProductController.updateProduct),
router.delete('/product/:id', ProductController.deleteProduct),

router.get('/product/:id/sku/:sku', ProductController.showOneSku),

module.exports = router