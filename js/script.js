// busines logic--------------------------------------------------------------------------

function PizzaOrder(pizzaSize, pizzaStyle, pizzaToppings, baptismAddOn, additionalInstructions) {
    this.pizzaSize = pizzaSize;
    this.pizzaStyle = pizzaStyle;
    this.pizzaToppings = pizzaToppings;
    this.baptismAddOn = baptismAddOn
    this.additionalInstructions = additionalInstructions;
}

let fullPrice = new PizzaOrder();

PizzaOrder.prototype.pizzaPrice = function () {
    console.log(parseInt($("#pizza-size").val()) + parseInt($("#pizza-style").val()) + parseInt($("#mushrooms").val()));
}

//user logic------------------------------------------------------------------------------

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const pizzaSizeOrder = parseInt($("#pizza-size").val());
        const pizzaStyleOrder = parseInt($("#pizza-style").val());
        const pizzaToppingsOrder = parseInt($("#mushrooms").val());

        console.log(pizzaSizeOrder, pizzaStyleOrder, pizzaToppingsOrder);

        $("#final-order").text(fullPrice.pizzaPrice());
    });
});