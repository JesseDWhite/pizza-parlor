// busines logic--------------------------------------------------------------------------

function PizzaOrder(pizzaSize, pizzaStyle, pizzaToppings, baptismDiscount) {
    this.pizzaSize = pizzaSize;
    this.pizzaStyle = pizzaStyle;
    this.pizzaToppings = pizzaToppings;
    this.baptismDiscount = baptismDiscount;
}

PizzaOrder.prototype.pizzaPrice = function () {
    let price = this.pizzaSize + this.pizzaStyle;
    if ($("#mushrooms").is(":checked")) {
        price += .45
    }
    if ($("#olives").is(":checked")) {
        price += .45
    }
    if ($("#onions").is(":checked")) {
        price += .45
    }
    if ($("#pepperoni").is(":checked")) {
        price += .45
    }
    if ($("#pineapple").is(":checked")) {
        price += .45
    }
    if ($("#sausage").is(":checked")) {
        price += .45
    }
    if ($("#bell-peppers").is(":checked")) {
        price += .45
    }
    if ($("#anchovies").is(":checked")) {
        price += .45
    }
    if ($("#baptism").is(":checked")) {
        price *= .90
    }
    return price;
};

//user logic------------------------------------------------------------------------------

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        function toppingsToDisplay() {
            let toppingsArray = [];
            if ($("#mushrooms").is(":checked")) {
                toppingsArray.push($("#mushrooms").val());
            }
            if ($("#olives").is(":checked")) {
                toppingsArray.push($("#olives").val());
            }
            if ($("#onions").is(":checked")) {
                toppingsArray.push($("#onions").val());
            }
            if ($("#pepperoni").is(":checked")) {
                toppingsArray.push($("#pepperoni").val());
            }
            if ($("#pineapple").is(":checked")) {
                toppingsArray.push($("#pineapple").val());
            }
            if ($("#sausage").is(":checked")) {
                toppingsArray.push($("#sausage").val());
            }
            if ($("#bell-peppers").is(":checked")) {
                toppingsArray.push($("#bell-peppers").val());
            }
            if ($("#anchovies").is(":checked")) {
                toppingsArray.push($("#anchovies").val());
            } return toppingsArray;
        };

        const pizzaSizeOrder = parseFloat($("#pizza-size").val());
        const pizzaStyleOrder = parseFloat($("#pizza-style").val());
        const baptismDiscountOrder = $("#baptism").is(":checked");

        let fullPrice = new PizzaOrder(pizzaSizeOrder, pizzaStyleOrder, toppingsToDisplay(), baptismDiscountOrder);

        const convertPrice = fullPrice.pizzaPrice().toFixed(2);

        $("#final-order").text(`$${convertPrice}`);
        $("#final-container").slideDown();

        $("#change-order").click(function (event) {
            event.preventDefault();

            $("#final-container").slideUp();
        });
        $("#checkout").click(function (event) {
            event.preventDefault();

            $("#final-container").slideUp();
            $("#checkout-container").slideDown();
            $("#submit-order").hide();
            $("#new-order").fadeIn();
        });
    });
});