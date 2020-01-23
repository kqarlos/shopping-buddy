DROP DATABASE IF EXISTS shoppinglist_db;

CREATE DATABASE shoppinglist_db;

USE shoppinglist_db;

CREATE TABLE shoppingList(
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(255) NOT NULL,
    done BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)