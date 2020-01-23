var express = require("express");
var shoppingList = require("../models/shoppinglist.js");

var router = express.Router();

router.get("/", function (req, res) {
  shoppingList.all(function (data) {
    console.log(data);
    res.render("index", { list: data });
  });

});

router.post("/api/list", function (req, res) {
  console.log("Data to add - item: " + "\"" + req.body.item + "\"" + " done: " + req.body.done);
  shoppingList.create(["item", "done"], ["\"" + req.body.item + "\"", req.body.done], function (result) {
    res.json({ id: result.insertID });
  });
});

router.put("/api/list/:id", function (req, res) {
  console.log("id: " + req.params.id + ", Done: " + req.body.done);
  shoppingList.update(["done = " + req.body.done], "id=" + req.params.id, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/list/:id", function (req, res) {
  shoppingList.delete("id=" + req.params.id, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
