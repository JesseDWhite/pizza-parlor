# _pizza-parlor_ 🍕
#### _This is our fourth week project for oject oriented javascript._
#### By _Jesse White_
## Technologies Used
* _HTML_
* _CSS_
* _Javascript_
* _Bootstrap_
## Description
_Welcome to Cheesus Crust Pizzeria and Baptism Clinic! You can use this web site to place an order from a local pizza restaraunt with multiple options._
## Setup/Installation Requirements
* _Download all files from this repository_
* _Open index.html in your browswer once it is downloaded_
* _You will then be able to build your pizza with the selection fields_
* _Once you submit the order, you will see your final price_
## Known Bugs
* _No known bugs._
## License
_MIT (c) Jesse White 2021_
## Contact Information
Jesse White - _jesse.white6@gmail.com_
## Specs
Describe fullPrice()

Test: it should take in input and spit out a new object called "fullOrder" using the PizzaOrder constructor.
Code: pizzaPrice("Small", "Brooklyn", "Mushrooms", "none")
Expected Output: fullPrice
PizzaOrder {pizzaSize: "small", pizzaStyle: "brooklyn", pizzaToppings: "mushrooms", additionalInstructions: "none"}


Describe pizzaPrice()

Test: it should take in information from fullPrice() and concat all the items within the object."
Code: 
let fullPrice = new PizzaOrder("small", "brooklyn", "mushrooms", "none");

PizzaOrder.prototype.pizzaPrice = function () {
    return this.pizzaSize + this.pizzaStyle + this.pizzaToppings + this.additionalInstructions;
} 
Expected Output: smallbrookylnmushroomsnone

Test: it should return an added value from the selected items instead of concating strings.
Code: fullPrice.pizzaPrice()
Expected Output: 20

Test: it should now take values from user form and add them together.
Code: fullPrice.pizzaPrice("small","brooklyn", "mushrooms")
Expected Output: 2
