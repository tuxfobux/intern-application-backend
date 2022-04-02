const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.EXPRESS_DB_HOST,
    user: process.env.EXPRESS_DB_USER,
    database: process.env.EXPRESS_DB_NAME,
    password: process.env.EXPRESS_DB_PASSWORD,
});

module.exports = pool.promise();