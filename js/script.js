// busines logic--------------------------------------------------------------------------

function PizzaOrder(pizzaSize, pizzaStyle, pizzaToppings, baptismDiscount) {
    this.pizzaSize = pizzaSize;
    this.pizzaStyle = pizzaStyle;
    this.pizzaToppings = pizzaToppings;
    this.baptismDiscount = baptismDiscount
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
}

//user logic------------------------------------------------------------------------------

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const pizzaSizeOrder = parseFloat($("#pizza-size").val());
        const pizzaStyleOrder = parseFloat($("#pizza-style").val());
        const pizzaToppingOrder = $("#mushrooms").val();
        let fullPrice = new PizzaOrder(pizzaSizeOrder, pizzaStyleOrder, pizzaToppingOrder);
        const convertPrice = fullPrice.pizzaPrice().toFixed(2);

        console.log(fullPrice)

        $("#final-order").text(`Your final price is: $${convertPrice}`);
    });
});