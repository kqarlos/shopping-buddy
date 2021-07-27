# Shopping Buddy 🛒

</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/kqarlos/shopping-buddy?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/kqarlos/shopping-buddy?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/kqarlos/shopping-buddy?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/kqarlos/shopping-buddy?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/kqarlos/shopping-buddy?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/shopping-buddy/mysql?style=for-the-badge" alt="MySQL Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/shopping-buddy/express?style=for-the-badge" alt="Express Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/shopping-buddy/express-handlebars?style=for-the-badge" alt="Express-Handlebars Version" />
    <img src="https://img.shields.io/github/last-commit/kqarlos/shopping-buddy?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/kqarlos/shopping-buddy?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/kqarlos?style=social" alt="Followers" />  
</p>

## Description

Keep track of what you need to get with Shopping Buddy. Add, change and delete items as you go shopping.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

Steps to run application:

    Command prompt:
    1. mysql -u root -p
    2. Enter password
    3. source db/schema.sql
    4. source d/seeds.sql (optional)

    Git Bash
    1. git clone git@github.com:kqarlos/shopping-buddy.git
    2. npm install
    3. add enviroment variables or update credentials in connection.js
    4. npm start

<p align="center">
    <a href="https://shopping-buddy2020.herokuapp.com/"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>


## Usage

### Screenshots

Working site

![Site](public/assets/images/live.gif)

### Snippets

### Inserting a new item

1. Client-side javascript

```javascript
    $(".cart").on("click", addToCart);
    // Creates a new item and sends it to the server. Reloads Page
    function addToList() {
        var item = {
            item: $("#newItem").val().trim(),
            done: false
        };
        // Send the POST request.
        $.ajax("/api/list", {
            type: "POST",
            data: item
        }).then(
            function () {
                console.log("created new item");
                location.reload();
            }
        );
    }
    
```
* This code takes care of creating an object by pulling information from the web's elements. This object is then sent to the server to be added to the database. The page is reloaded after this work is done by the server.


2. Server route

```javascript
router.post("/api/list", function (req, res) {
  console.log("Data to add - item: " + "\"" + req.body.item + "\"" + " done: " + req.body.done);
  shoppingList.create(["item", "done"], ["\"" + req.body.item + "\"", req.body.done], function (result) {
    res.json({ id: result.insertID });
  });
});

```
* The object is received by the server route _/api/list_. This function calls the _Shopping List_ object model. It calls the create function with the properties to be set and the values of said properties.

3. Shopping list object model

```javascript
    create: function (cols, values, cb) {
        orm.create("list", cols, values, function (res) {
            cb(res);
        });
    }
```
* The _Shopping List_ model recieves property names and its values to be updated in the _List_ table. The information recieved together with the name of the table to be udated is sent to the object relational mapping to perform the query.

4. ORM

```javascript
    create: function (table, cols, values, cb) {
        var query = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + values.toString() + ")";
        console.log(query);
        connection.query(query, values, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
```
* The ORM takes the information from the _Shopping List_ model and builds the query. This query is then sent to the MySQL database connection to be run.

## Credits 

### Author

- 💼 Carlos Toledo: [portfolio](https://kqarlos.github.io)
- :octocat: Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)


### Built With

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blue?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://www.npmjs.com/package/express"><img src="https://img.shields.io/badge/-Express-green?style=for-the-badge" alt="Express" /></a>
    <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/-MySQL-blue?style=for-the-badge" alt="MySQL" /></a>
    <a href="https://handlebarsjs.com/"><img src="https://img.shields.io/badge/-Handlebars-green?style=for-the-badge" alt="Handlebars" /></a>
</p>

## License

</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/shopping-buddy?style=for-the-badge" alt="MIT license" />
</p>