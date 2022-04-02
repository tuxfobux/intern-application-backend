module.exports = app => {
    const categories = require("../controllers/categories.js");
    const router = require("express").Router();

    // List all categories
    router.get('/', categories.getAll);

    app.use('/categories', router);
}