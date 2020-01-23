var connection = require("../config/connection.js");

//ORM directly interacts with the database using queries
var orm = {
    all: function (table, cb) {
        query = "SELECT * FROM " + table + ";";
        console.log(query);
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    create: function (table, cols, values, cb) {
        var query = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + values.toString() + ")";
        console.log(query);
        connection.query(query, values, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function (table, values, condition, cb) {
        var query = "UPDATE " + table + " SET " + values.toString() + " WHERE " + condition;
        console.log(query);
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    delete: function (table, condition, cb) {
        var query = "DELETE FROM " + table + " WHERE " + condition;
        console.log(query);
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;