// TALLEST MOUNTAIN STARTS

// Declare an i nterface
interface Mountain {
	name: string;
	height: number;
}
// Declare an array
let mountainsWeveClimbed: Mountain[] = [
	{ name: "Kilimanjaro", height: 19341 },
	{ name: "Everest", height: 29029 },
	{ name: "Denali", height: 20310 },
];
// Declare a function that returns a string, the name of the tallest mountain in the
// given array. If the array argument is empty, return an empty string
function findNameOfTallestMountain(mountains: Mountain[]) {
	let tallest = null;
	for (let mountain of mountains) {
		if (!tallest) {
			tallest = mountain;
		}
		if (mountain.height > tallest.height) {
			tallest = mountain;
		}
	}
	// Store the result of the function call (the return value) in a variable
	return tallest?.name;
}
// and then console.log the variable.
console.log(findNameOfTallestMountain(mountainsWeveClimbed));

// TALLEST MOUNTAIN ENDS

// PRODUCT STARTS

// Declare an interface
interface Product {
	name: string;
	price: number;
}
// Declare an array filled with a few products of your own choosing.
let products: Product[] = [
	{ name: "sandwich", price: 3.99 },
	{ name: "chips", price: 2.5 },
	{ name: "drink", price: 1.25 },
];
// Declare a function that returns a number, the average price of all the products provided
// as an argument. I f the array argument i s empty, return 0.
function calcAverageProductPrice(products: Product[]) {
	let price: number = 0;
	for (let product of products) {
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

// PRODUCT ENDS

// INVENTORY STARTS
interface InventoryItem {
	product: Product[];
	quantity: number;
}

// Declare an array filled with a few products of your own choosing.

let inventory: InventoryItem[] = [
	{ product: [{ name: "motor", price: 10.0 }], quantity: 10 },
	{ product: [{ name: "sensor", price: 12.5 }], quantity: 4 },
	{ product: [{ name: "LED", price: 1.0 }], quantity: 20 },
];

// It returns a number, the total value of all the products in the
// inventory array provided as an argument. If the array argument is empty, return 0.
function calcInventoryValue(inventory: InventoryItem[]) {
	let itemTotal: number = 0;
	let inventoryTotal: number = 0;
	let itemPrice: number = 0;
	for (let item of inventory) {
		if (item === null) {
			return 0;
		}
		for (let products of item.product) {
			itemPrice = products.price;
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
