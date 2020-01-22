var orm = require("../config/orm.js");

var shoppingList = {
    all: function (cb) {
        orm.all("list", function (res) {
            cb(res);
        });
    },
    create: function (cols, values, cb) {
        orm.create("list", cols, values, function (res) {
            cb(res);
        })
    },
    update: function (values, condition, cb) {
        orm.update("list", values, condition, function (res) {
            cb(res);
        })
    }
}

module.exports = shoppingList;
