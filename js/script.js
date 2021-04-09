// busines logic--------------------------------------------------------------------------

function PizzaOrder(pizzaSize, pizzaStyle, pizzaToppings, baptismDiscount) {
    this.pizzaSize = pizzaSize;
    this.pizzaStyle = pizzaStyle;
    this.pizzaToppings = pizzaToppings;
    this.baptismDiscount = baptismDiscount
}

PizzaOrder.prototype.pizzaPrice = function () {
    let price = this.pizzaSize + this.pizzaStyle + this.pizzaToppings;
    if ($("#mushrooms").is(":checked")) {
        price += 1
    }
    if ($("#olives").is(":checked")) {
        price += 1
    }
    if ($("#onions").is(":checked")) {
        price += 1
    }
    if ($("#pepperoni").is(":checked")) {
        price += 1
    }
    if ($("#pineapple").is(":checked")) {
        price += 1
    }
    if ($("#sausage").is(":checked")) {
        price += 1
    }
    if ($("#bell-peppers").is(":checked")) {
        price += 1
    }
    if ($("#anchovies").is(":checked")) {
        price += 1
    }
    return price;
}

//user logic------------------------------------------------------------------------------

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const pizzaSizeOrder = parseFloat($("#pizza-size").val());
        const pizzaStyleOrder = parseFloat($("#pizza-style").val());
        const pizzaToppingsOrder = parseFloat($("#mushrooms").val());

        let fullPrice = new PizzaOrder(pizzaSizeOrder, pizzaStyleOrder, pizzaToppingsOrder);

        $("#final-order").text(`Your final price is: $${fullPrice.pizzaPrice()}`);
    });
});