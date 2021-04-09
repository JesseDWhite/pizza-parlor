function PizzaOrder(pizzaSize, pizzaStyle, pizzaToppings, additionalInstructions) {
    this.pizzaSize = pizzaSize;
    this.pizzaStyle = pizzaStyle;
    this.pizzaToppings = pizzaToppings;
    this.additionalInstructions = additionalInstructions;
}

let fullPrice = new PizzaOrder("small", "brooklyn", "mushrooms", "none");

PizzaOrder.prototype.pizzaPrice = function () {
    fullPrice.pizzaSize;
    fullPrice.pizzaStyle;
    fullPrice.pizzaToppings;
    fullPrice.additionalInstructions;
}