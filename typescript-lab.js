// TALLEST MOUNTAIN STARTS
// Declare an array
var mountainsWeveClimbed = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
// Declare a function that returns a string, the name of the tallest mountain in the
// given array. If the array argument is empty, return an empty string
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (!tallest) {
            tallest = mountain;
        }
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    }
    // Store the result of the function call (the return value) in a variable
    return tallest === null || tallest === void 0 ? void 0 : tallest.name;
}
// and then console.log the variable.
console.log(findNameOfTallestMountain(mountainsWeveClimbed));
// Declare an array filled with a few products of your own choosing.
var products = [
    { name: "sandwich", price: 3.99 },
    { name: "chips", price: 2.5 },
    { name: "drink", price: 1.25 },
];
// Declare a function that returns a number, the average price of all the products provided
// as an argument. I f the array argument i s empty, return 0.
function calcAverageProductPrice(products) {
    var price = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        if (products === null) {
            return 0;
        }
        price = price + product.price;
    }
    price = price / products.length;
    // Store the result of the function call (the return value) in a variable
    return price;
}
// and then console.log the variable.
console.log(calcAverageProductPrice(products));
// Declare an array filled with a few products of your own choosing.
var inventory = [
    { product: [{ name: "motor", price: 10.0 }], quantity: 10 },
    { product: [{ name: "sensor", price: 12.5 }], quantity: 4 },
    { product: [{ name: "LED", price: 1.0 }], quantity: 20 },
];
// It returns a number, the total value of all the products in the
// inventory array provided as an argument. If the array argument is empty, return 0.
function calcInventoryValue(inventory) {
    var itemTotal = 0;
    var inventoryTotal = 0;
    var itemPrice = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        if (item === null) {
            return 0;
        }
        for (var _a = 0, _b = item.product; _a < _b.length; _a++) {
            var products_2 = _b[_a];
            itemPrice = products_2.price;
        }
        itemTotal = item.quantity * itemPrice;
        inventoryTotal = inventoryTotal + itemTotal;
    }
    return inventoryTotal;
    // For each Inventory Item take the product price times
    // the quantity. Add these together for all the i tems.
}
console.log(calcInventoryValue(inventory));
// INVENTORY ENDS
