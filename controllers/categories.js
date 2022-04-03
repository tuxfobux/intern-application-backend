const Category = require("../models/Category");

exports.getAllCategories = async (req, res, next) => {
    try {
        const [categories, _] = await Category.findAll();
        res.status(200).json({ categories });
    } catch (error) {
        next(error);
    }
};

exports.createNewCategory = async (req, res, next) => {
    const name = req.body.name;
    try {
        if ((await Category.findByName(name))[0].length) {
            res.status(400).json({ message: "Category already exists!" });
            return;
        }
        let newCategory = new Category(name);
        newCategory = await newCategory.save();
        res.status(201).json({ message: "Category created" });
    } catch (error) {
        next(error);
    }
};

exports.updateCategory = async (req, res, next) => {
    const id = Number(req.params.id);
    const newName = req.body.name;
    try {
        if (!(await Category.findById(id))[0].length) {
            res.status(400).json({ message: "Category with such id doesn't exist!" });
            return;
        }
        if ((await Category.findByName(newName))[0].length) {
            res.status(400).json({ message: "Category with such name already exists!" });
            return;
        }
        await Category.updateById(newName, id);
        res.status(200).json({ message: "Category updated" });
    } catch (error) {
        next(error);
    }
};

exports.deleteCategory = async (req, res, next) => {
    const id = Number(req.params.id);
    try {
        if (!(await Category.findById(id))[0].length) {
            res.status(400).json({ message: "Category with such id doesn't exist!" });
            return;
        }
        await Category.deleteById(id);
        res.status(200).json({ message: "Category deleted" });
    } catch (error) {
        next(error);
    }
};