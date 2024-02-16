console.log('Web Serverni boshlash');
const express = require("express");
const res = require("express/lib/response");
const app = express();

//MongoDB Call
const db = require("./server").db();
const mongoDB = require("mongodb");

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
    console.log("user entered /created-item");
    console.log(req.body);
   const new_reja = req.body.reja;
   db.collection("plans").insertOne({reja:new_reja}, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
   });
});

app.post("/delete-item", (req, res) => {
   const id = req.body.id;
   db.collection("plans").deleteOne({_id: new mongoDB.ObjectId(id)}, function(err, data) {
    res.json({state: "success" });
   })
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
    {_id: new mongoDB.ObjectId(data.id) },
    { $set: { reja: data.new_input} },
    function(err, data) {
        res.json({ state: "Success" });
    }
    );
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({state: "All Plans are deleted" });
        });
    }
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("someting went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });
});

module.exports = app;

