const Product = require('../models/productModel');

// Create a new product
exports.createProduct = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if (err) return res.status(400).json({ success: false, error: err });
    return res.status(200).json({ success: true, data: product });
  });
};

// Get all products
exports.getAllProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) return res.status(400).json({ success: false, error: err });
    return res.status(200).json({ success: true, data: products });
  });
};

// Get a single product by ID
exports.getProductById = (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return res.status(400).json({ success: false, error: err });
    return res.status(200).json({ success: true, data: product });
  });
};

// Update a product by ID
exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, product) => {
      if (err) return res.status(400).json({ success: false, error: err });
      return res.status(200).json({ success: true, data: product });
    }
  );
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.status(400).json({ success: false, error: err });
    return res.status(200).json({ success: true, data: {} });
  });
};
