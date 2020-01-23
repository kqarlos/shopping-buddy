$(function () {

    // renderList();
    $("#add").on("click", addToList);
    $(document).on("click", "#cart", addToCart(event));
    $(document).on("click", "#del", deleteItem(event));


    // function renderList() {

    //     $.get("/api/list", function (data) {
    //         console.log("All items", data);
    //     });



    // }

    // Creates a new item and sends it to the route. Reload Page
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

    function addToCart(event) {
        console.log("adding to cart");
        var id = $(this).attr("data-id");
        $.ajax("/api/list/" + id, {
            type: "PUT",
            data: { done: true }
        }).then(function () {
            console.log("changed " + id + "to done");
            location.reload();
        });
    }
    function deleteItem(event) {
        var id = $(this).attr("data-id");
        console.log("deleting " + id);
    }
});