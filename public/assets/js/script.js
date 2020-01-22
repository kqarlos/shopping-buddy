$(function () {

    renderList();
    $("#add").on("click", addToList);
    $(document).on("click", "#cart", addToCart);
    $(document).on("click", "#del", deleteItem);


    function renderList() {

        $.get("/api/list", function (data) {
            console.log("All items", data);
        });



    }

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

    function addToCart() {


    }
    function deleteItem() {


    }
});