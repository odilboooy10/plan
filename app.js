console.log('Web Serverni boshlash');
const express = require("express");
const res = require("express/lib/response");
const app = express();

//MongoDB Call
const db = require("./server").db();

// 1: KIrish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req);
    res.json({ test: "success" });
});

app.get("/", function (req, res) {
    res.render("reja");
});

module.exports = app;
/*app.get("/hello", function(req, res) {
    res.end("<h1>HELLO WORLD by Odilxon</h1>");
});
app.get("/gift", function(req, res) {
    res.end("<h1>Siz sovg'alar bo'limidasiz</h1>");
});*/
