const db = require("../config/db");

class Category {
    constructor(name) {
        this.name = name;
    }

    static findAll() {
        let sql = "SELECT name FROM categories;";
        return db.execute(sql);
    }
}

module.exports = Category;