module.exports = app => {
    const categories = require("../controllers/categories.js");
    const products = require("../controllers/products.js");
    const router = require("express").Router();
    const { validateParameter, validateBody, schemas } = require('../middleware/paramValidation.js');

    router
        // Get all categories
        .get('/', categories.getAllCategories)
        // Create a new category
        .post('/', validateBody(schemas.categorySchema), categories.createNewCategory)
        // Update existing category
        .patch('/:id', [
            validateParameter(schemas.idSchema, 'id'),
            validateBody(schemas.categorySchema)], categories.updateCategory)
        // Delete a category
        .delete('/:id', validateParameter(schemas.idSchema, 'id'), categories.deleteCategory)

        // Get all products of a category
        .get('/:id/products', validateParameter(schemas.idSchema, 'id'), products.getProductsOfCategory)
        // Insert a new product to category
        .post('/:id/products', [
            validateParameter(schemas.idSchema, 'id'),
            validateBody(schemas.productSchema)], products.createNewProduct)
        // Update existing product under a category
        .patch('/:id/products', [
            validateParameter(schemas.idSchema, 'id'),
            validateBody(schemas.patchProductSchema)], products.updateProduct)
        // Delete a product under a category
        .delete('/:id/products', [
            validateParameter(schemas.idSchema, 'id'),
            validateBody(schemas.deleteProductSchema)], products.deleteProduct);

    app.use('/categories', router);
}