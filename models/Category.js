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
        let sql = "SELECT * FROM categories;";
        return db.execute(sql);
    }

    static findByName(name) {
        let sql = "SELECT name FROM categories WHERE name = ?;";
        return db.execute(sql, [name]);
    }
}

module.exports = Category;