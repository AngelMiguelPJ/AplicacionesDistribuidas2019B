const Category = require('../models/category');

const categoryCtrl = {};

categoryCtrl.getCategories = async (req, res, next) => {
    const categories = await Category.find();
    res.json(categories);
};

categoryCtrl.createCategory = async (req, res, next) => {
    const category = new Category({
        name: req.body.name
    });
    await category.save();
    res.json({status: 'Categoria creada'});
};

categoryCtrl.getCategory = async (req, res, next) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.json(category);
};

categoryCtrl.editCategory = async (req, res, next) => {
    const { id } = req.params;
    const category = {
        name: req.body.name
    };
    await Category.findByIdAndUpdate(id, {$set: category}, {new: true});
    res.json({status: 'Categoria Actualizada'});
};

categoryCtrl.deleteCategory = async (req, res, next) => {
    await Category.findByIdAndRemove(req.params.id);
    res.json({status: 'Categoria Eliminada'});
};

module.exports = categoryCtrl;