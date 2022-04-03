const db = require("../config/db");

class Category {
    constructor(name) {
        this.name = name;
    }

    save() {
        let sql = "INSERT INTO categories (name) VALUES (?)";
        return db.execute(sql, [this.name]);
    }

    static findAll() {
        let sql = "SELECT * FROM categories ORDER BY id;";
        return db.execute(sql);
    }

    static findByName(name) {
        let sql = "SELECT name FROM categories WHERE name = ?;";
        return db.execute(sql, [name]);
    }

    static findById(id) {
        let sql = "SELECT name FROM categories WHERE id = ?;";
        return db.execute(sql, [id]);
    }

    static updateById(name, id) {
        let sql = "UPDATE categories SET name = ? WHERE id = ?;"
        return db.execute(sql, [name, id]);
    }

    static deleteById(id) {
        let sql = "DELETE FROM categories WHERE id = ?;"
        return db.execute(sql, [id]);
    }
}

module.exports = Category;