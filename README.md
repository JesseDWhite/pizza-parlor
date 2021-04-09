# _{Application Name}_
#### _{Brief description of application}_
#### By _**{List of contributors}**
## Technologies Used
* _List all_
* _the major technologies_
* _you used in your project_
* _here
## Description
_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}
## Setup/Installation Requirements
* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_
_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_
## Known Bugs
* _Any known issues_
* _should go here_
## License
_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_
## Contact Information
_{Add your contact information here.}_
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
