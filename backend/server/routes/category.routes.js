const express = require('express');
const router = express.Router();

const category = require('../controllers/category.controller');

router.get('/', category.getCategories);
router.post('/', category.createCategory);
router.get('/:id', category.getCategory);
router.put('/:id', category.editCategory);
router.delete('/:id', category.deleteCategory);

module.exports = router;