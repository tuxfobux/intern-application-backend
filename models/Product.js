const db = require("../config/db");

class Product {
    constructor(content, categoryId) {
        this.content = content;
        this.categoryId = categoryId;
    }

    save() {
        let sql = "INSERT INTO products (content, category_id) VALUES (?, ?)";
        return db.execute(sql, [this.content, this.categoryId]);
    }

    static findAllProductsByCategoryId(id) {
        let sql = "SELECT * FROM products WHERE category_id = ?;"
        return db.execute(sql, [id]);
    }

    static findByContent(content, id) {
        let sql = "SELECT content FROM products WHERE content = ? AND category_id = ?;";
        return db.execute(sql, [content, id]);
    }

    static findById(categoryId, productId) {
        let sql = "SELECT content FROM products WHERE category_id = ? AND id = ?;";
        return db.execute(sql, [categoryId, productId]);
    }

    static updateById(content, categoryId, productId) {
        let sql = "UPDATE products SET content = ? WHERE id = ? AND category_id = ?;"
        return db.execute(sql, [content, productId, categoryId]);
    }

    static deleteById(categoryId, productId) {
        let sql = "DELETE FROM products WHERE id = ? AND category_id = ?;"
        return db.execute(sql, [productId, categoryId]);
    }
}

module.exports = Product;