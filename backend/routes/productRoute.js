const express = require('express');
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.get("/list", getAllProducts);
router.get("/:id", getProductById);
router.post("/create", addProduct);
router.post("/update/:id", updateProduct);
router.get("/delete/:id", deleteProduct);


module.exports = router;