DROP DATABASE IF EXISTS shoppinglist_db;

CREATE DATABASE shoppinglist_db;

USE shoppinglist_db;

CREATE TABLE shoppingList(
    id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(255) NOT NULL,
    done BOOLEAN DEFAULT false,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)