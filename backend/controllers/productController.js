const productModel = require('../models/productModel');

const getAllProducts = async (req, res) => {
  try {
    let response = await productModel.find();

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const getProductById = async (req, res) => {
  try {
    let response = await productModel.findById(req.params.id);

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const addProduct = async (req, res) => {
  const { name, price, description, image } = req.body;

  const product = new productModel({
    name, price, description, image
  })

  try {
    const response = await product.save();

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price, description, image } = req.body;

  const product = new productModel({
    name, price, description, image
  })

  try {
    const response = await productModel.updateOne({ _id: productId }, { $set: req.body });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const response = await productModel.deleteOne({ _id: productId });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

module.exports = { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };