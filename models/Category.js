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
        let sql = "SELECT name FROM categories;";
        return db.execute(sql);
    }
}

module.exports = Category;