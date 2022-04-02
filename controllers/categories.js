const Category = require("../models/Category");
const Product = require("../models/Product");

exports.getAll = async (req, res, next) => {
    try {
        const [categories, _] = await Category.findAll();
        res.status(200).json({ categories });
    } catch (error) {
        next(error);
    }
};

exports.createNewCategory = async (req, res, next) => {
    const name = req.body.name;
    if (!name) {
        res.status(400).json({ message: "Supply the category \"name\" parameter!" });
        return;
    }
    if (name.length > 15 || name.length == 0) {
        res.status(400).json({ message: "Category name must be between 1 and 16 characters!" });
        return;
    }
    try {
        let newCategory = new Category(name);
        newCategory = await newCategory.save();
        res.status(201).json({ message: "Post created" });
    } catch (error) {
        next(error);
    }
};