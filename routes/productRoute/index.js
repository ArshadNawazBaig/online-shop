const express = require('express');
const ProductController = require('../controllers/productController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProduct);
router.post('/', requireAuth, ProductController.createProduct);
router.put('/:id', requireAuth, ProductController.updateProduct);
router.delete('/:id', requireAuth, ProductController.deleteProduct);

module.exports = router;
