const Category = require("../models/Category");
const Product = require("../models/Product");

exports.getProductsOfCategory = async (req, res, next) => {
    const id = Number(req.params.id);
    try {
        const [products, _] = await Product.findAllProductsByCategoryId(id);
        res.status(200).json({ products });
    } catch (error) {
        next(error);
    }
};

exports.createNewProduct = async (req, res, next) => {
    const content = req.body.content;
    const categoryId = Number(req.params.id);
    try {
        if ((await Product.findByContent(content, categoryId))[0].length) {
            res.status(400).json({ message: "Product already exists in that category!" });
            return;
        }
        let newCategory = new Product(content, categoryId);
        newCategory = await newCategory.save();
        res.status(201).json({ message: "Product created" });
    } catch (error) {
        next(error);
    }
};

exports.updateProduct = async (req, res, next) => {
    const categoryId = Number(req.params.id);
    const newContent = req.body.content;
    const productId = req.body.id;
    try {
        if (!(await Product.findById(categoryId, productId))[0].length) {
            res.status(400).json({ message: "Product with such id doesn't exist!" });
            return;
        }
        if ((await Product.findByContent(newContent, categoryId))[0].length) {
            res.status(400).json({ message: "Product with such content already exists!" });
            return;
        }
        await Product.updateById(newContent, categoryId, productId);
        res.status(200).json({ message: "Product updated" });
    } catch (error) {
        next(error);
    }
};

exports.deleteProduct = async (req, res, next) => {
    const categoryId = Number(req.params.id);
    const productId = req.body.id;
    try {
        if (!(await Product.findById(categoryId, productId))[0].length) {
            res.status(400).json({ message: "Product with such id doesn't exist!" });
            return;
        }
        await Product.deleteById(categoryId, productId);
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        next(error);
    }
};