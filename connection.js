const mysql = require("mysql");

const db = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6695637",
    database: "sql6695637",
    password: "naLKHVA7px",
});


module.exports = db;