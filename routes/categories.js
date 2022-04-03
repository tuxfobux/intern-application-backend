module.exports = app => {
    const categories = require("../controllers/categories.js");
    const products = require("../controllers/products.js");
    const router = require("express").Router();

    router
        // Get all categories
        .get('/', categories.getAll)
        // Create a new category
        .post('/', categories.createNewCategory)
        // Update existing category
        .patch('/:id', categories.updateCategory)
        // Delete a category
        .delete('/:id', categories.deleteCategory)

        // Get all products of a category
        .get('/:id/products', products.getProductsOfCategory)
        // Insert a new product to category
        .post('/:id/products', products.createNewProduct)
        // Update existing product under a category
        .patch('/:id/products', products.updateProduct)
        // Delete a product under a category
        .delete('/:id/products', products.deleteProduct);

    app.use('/categories', router);
}