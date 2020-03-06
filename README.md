# Shopping Buddy

Keep track of what you need to get with Shopping Buddy. Add, change and delete items as you go shopping.

## Getting Started

Steps to run application:
1. Clone git repository
2. Install dependencies
3. Create schema with given schema.sql, seed.sql, and employees.csv using the command line of MySQL workspace.
4. Update database credentials inside config/connection.js
5. run app

```
git clone git@github.com:kqarlos/shopping-buddy.git
npm install
node server.js

```


## Site Pictures

Working site

![Site](public/assets/images/live.gif)

## Code Snippets

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

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [MySQL](https://www.mysql.com/)
* [Handlebars](https://handlebarsjs.com/)

## Deployed Link

* [See Deployed Site](https://shopping-buddy2020.herokuapp.com/)

## Author

 * **Carlos Toledo** 

## Links

- [Link to site repository](https://github.com/kqarlos/shopping-buddy)
- [Link to Github](https://www.github.com/kqarlos)
- [Link to LinkedIn](https://www.linkedin.com/in/carlos-toledo415/)