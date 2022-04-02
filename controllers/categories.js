const Category = require("../models/Category");
const Product = require("../models/Product");

exports.getAll = async (req, res, next) => {
    try {
        const [categories, _] = await Category.findAll();
        res.status(200).json({ count: categories.length, categories });
    } catch (error) {
        next(error);
    }
};