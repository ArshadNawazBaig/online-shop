const express = require('express');
const ProductController = require('./../../controllers/productController');
const { requireAuth } = require('./../../middleware/authMiddleware');

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', requireAuth, ProductController.createProduct);
router.put('/:id', requireAuth, ProductController.updateProduct);
router.delete('/:id', requireAuth, ProductController.deleteProduct);

module.exports = router;
