var orm = require("../config/orm.js");

// Directly calls the ORM to query the list table
var shoppingList = {
    all: function (cb) {
        orm.all("shoppingList", function (res) {
            cb(res);
        });
    },
    create: function (cols, values, cb) {
        orm.create("shoppingList", cols, values, function (res) {
            cb(res);
        });
    },
    update: function (values, condition, cb) {
        orm.update("shoppingList", values, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("shoppingList", condition, function (res) {
            cb(res);
        });
    }
}

module.exports = shoppingList;
