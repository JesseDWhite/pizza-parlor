// busines logic--------------------------------------------------------------------------

function PizzaOrder(pizzaSize, pizzaStyle, pizzaToppings, additionalInstructions) {
    this.pizzaSize = pizzaSize;
    this.pizzaStyle = pizzaStyle;
    this.pizzaToppings = pizzaToppings;
    this.additionalInstructions = additionalInstructions;
}

let fullPrice = new PizzaOrder("small", "brooklyn", "mushrooms", "none");

PizzaOrder.prototype.pizzaPrice = function () {
    return 5 + 5 + 5 + 5;
}

//user logic------------------------------------------------------------------------------