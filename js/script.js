// busines logic--------------------------------------------------------------------------

function PizzaOrder(pizzaSize, pizzaStyle, pizzaToppings, baptismAddOn, additionalInstructions) {
    this.pizzaSize = pizzaSize;
    this.pizzaStyle = pizzaStyle;
    this.pizzaToppings = pizzaToppings;
    this.baptismAddOn = baptismAddOn
    this.additionalInstructions = additionalInstructions;
}

let fullPrice = new PizzaOrder("small", "brooklyn", "mushrooms", "none");

PizzaOrder.prototype.pizzaPrice = function () {
    return 5 + 5 + 5 + 5;
}

//user logic------------------------------------------------------------------------------

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();


    });
});