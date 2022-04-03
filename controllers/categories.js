const Category = require("../models/Category");

exports.getAll = async (req, res, next) => {
    try {
        const [categories, _] = await Category.findAll();
        res.status(200).json({ categories });
    } catch (error) {
        next(error);
    }
};

exports.createNewCategory = async (req, res, next) => { // TODO maybe should return the id
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
    const newName = req.body.name; // name checks similar to createNewCategory also if the name previously exists, prolly create functions for that
    if (!id) {
        res.status(400).json({ message: "Supply the category \"id\" parameter!" });
        return;
    }
    try {
        if (!(await Category.findById(id))[0].length) {
            res.status(400).json({ message: "Category with such id doesn't exist!" });
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
    if (!id) {
        res.status(400).json({ message: "Supply the category \"id\" parameter!" });
        return;
    }
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