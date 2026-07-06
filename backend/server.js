const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yasmitha.Ande@726", // Enter your MySQL password here
    database: "portfolio"
});

connection.connect((err) => {
    if (err) {
        console.log("❌ Database Connection Failed");
        console.log(err);
    } else {
        console.log("✅ Connected to MySQL");
    }
});

app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running");
});

app.get("/projects", (req, res) => {
    connection.query("SELECT * FROM projects", (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

