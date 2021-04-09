// busines logic--------------------------------------------------------------------------

function PizzaOrder(pizzaSize, pizzaStyle, pizzaToppings, baptismAddOn, additionalInstructions) {
    this.pizzaSize = pizzaSize;
    this.pizzaStyle = pizzaStyle;
    this.pizzaToppings = pizzaToppings;
    this.baptismAddOn = baptismAddOn
    this.additionalInstructions = additionalInstructions;
}

let fullPrice = new PizzaOrder("small", "brooklyn", "mushrooms");

PizzaOrder.prototype.pizzaPrice = function () {
    return pizzaSizeOrder + pizzaStyleOrder + pizzaToppingsOrder;
}

//user logic------------------------------------------------------------------------------

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const pizzaSizeOrder = parseInt($("#pizza-size").val());
        const pizzaStyleOrder = parseInt($("#pizza-style").val());
        const pizzaToppingsOrder = parseInt($("#pizza-toppings").val());



    });
});