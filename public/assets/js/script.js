$(function () {

    $("#add").on("click", addToList);
    $(".cart").on("click", addToCart);
    $(".del").on("click", deleteItem);

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

    //Gets item id from the button. Sends id to the server to update its value and move to the shopping cart
    function addToCart() {
        console.log("adding to cart");
        var id = $(this).attr("data-id");
        $.ajax("/api/list/" + id, {
            type: "PUT",
            data: {
                done: true
            }
        }).then(function () {
            console.log("changed " + id + "to done");
            location.reload();
        });
    }

    //Grabs the id form the button. Sends the id to the server to get deleted.
    function deleteItem(event) {
        var id = $(this).attr("data-id");
        $.ajax("/api/list/" + id, {
            type: "DELETE"
        }).then(function () {
            console.log("deleting " + id);
            location.reload();
        });
    }
});