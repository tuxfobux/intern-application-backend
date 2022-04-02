module.exports = app => {
    const categories = require("../controllers/categories.js");
    const router = require("express").Router();

    router
        // Get all categories
        .get('/', categories.getAll)
        // Create a new category
        .post('/', categories.createNewCategory);

    app.use('/categories', router);
}