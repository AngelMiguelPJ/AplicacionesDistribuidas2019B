const Product = require('../models/product');

const productCtrl = {};

productCtrl.getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.json(products);
};

productCtrl.createProduct = async (req, res, next) => {
    const product = new Product({
        name: req.body.name
    });
    await product.save();
    res.json({status: 'Producto creado'});
};

productCtrl.getProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
};

productCtrl.editProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = {
        name: req.body.name
    };
    await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
    res.json({status: 'Producto Actualizado'});
};

productCtrl.deleteProduct = async (req, res, next) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Eliminado'});
};

module.exports = productCtrl;