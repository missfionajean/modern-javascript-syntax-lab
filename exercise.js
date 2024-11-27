const array1 = ["vanilla", "chocolate", "strawberry"];

const array2 = array1.map((currentElement) => {
	return currentElement + " ice cream";
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const numsDoubled = nums.map((num) => {
	return num * 2;
});

console.log(numsDoubled);

// Array destructing (i.e. unpacking into variables)

const petsArray = ["Rover", "Snuffles", "Toto", "Spot"];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here

const [topping1, topping2] = pizzaToppings;

console.log(topping1);
console.log(topping2);

// object destructing
const person = {
	name: "Alex",
	role: "Software Engineer",
};

// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); // 'Alex'
console.log(person.role); // 'Software Engineer'

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
	make: "Audi",
	model: "q5",
};

// Your code here

const { make, model } = car;

console.log(make);
console.log(model);

// spread operator (...) - creates a copy rather than reference

const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]

// example of array referencing (affects original)

const referenceArray = originalArray; // referenceArray is now a reference to originalArray

referenceArray.push(4); // Modifying referenceArray also modifies originalArray
console.log(originalArray); // [1, 2, 3, 4]

// spread operator solves this problem

const fruits = ["apple", "orange", "banana"];
const vegetables = ["broccoli", "carrot", "spinach"];

// spreads copies of two arrays into single new array
const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ["Pineapple", "Olives", "Anchovies"];

// Your code here

const controversialPizzaToppings = [...pizzaToppings2];

console.log(controversialPizzaToppings);

// spread operator on object

const originalObject = {
	foo: "Hello",
	bar: 100,
};

const clonedObject = { ...originalObject };
console.log("Clone: ", clonedObject); // { foo: 'Hello', bar: 100 }

// demonstrating how referencing affects original object

const originalObject2 = {
	foo: "Hello",
	bar: 100,
};

const clonedObject2 = originalObject2;
clonedObject2.foo = "Goodbye";

console.log(originalObject2); // { foo: 'Goodbye', bar: 100 }

// fixed using spread operator

const originalObject3 = {
	foo: "Hello",
	bar: 100,
};

// Copy the properties of originalObject:
const clonedObject3 = { ...originalObject3 };

// Update the properties of clonedObject:
clonedObject3.foo = "Goodbye";
clonedObject3.bar = 0;

console.log("Original: ", originalObject3); // { foo: 'Hello', bar: 100 }
console.log("Clone: ", clonedObject3); // { foo: 'Goodbye', bar: 0 }

// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
	make: "Audi",
	model: "q5",
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const newCar2 = { ...car2 };
newCar2.model = "q7";
console.log(car2);
console.log(newCar2);

// dynamic keys in objects

const fruitInventory = {
	apples: 2,
	oranges: 4,
};

// allows for key referencing through variables

const selectedFruit = "apples"; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];

console.log(selectedFruitCount); // 2

// demonstrating the inverse, a dynamic key in the object (use [])

const fruitType = "bananas"; // Variable as a dynamic key

const fruitInventory2 = {
	[fruitType]: 5,
};

console.log(fruitInventory2); // { bananas: 5 }

// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const propertyName = "Green Acres"; // must be defined first

const userProfile = {
	[propertyName]: 2,
};

console.log(userProfile);

// import and export to use variables, etc in other files

/*
// import and export syntax allows us to share code between different files - this is a more modern approach compared to the require and module.exports

// named export
export const myNumber = 123;
export const myString = "Hello";

// default export (for single single item)
export default function superCoolFunction() {
	// relevant code here
}

// import
import { myNumber, myString } from './myData.js';
import superCoolFunction from './superCoolFunction.js';

// it’s possible to mix default and named exports in a single module, but it’s a best practice to stick to one style for consistency and clarity.

// you can also import all named exports as a single object, which is useful when dealing with modules that export several items:

// import as object "MyData"
import * as MyData from './myData.js';
console.log(MyData.myNumber);
console.log(MyData.myString);
*/

// default function parameters

// without
function addThreeNumbers(numA, numB, numC) {
	return numA + numB + numC;
}

console.log(addThreeNumbers(2)); // will return NaN

// with
function addThreeNumbersWithDefaults(numA, numB = 2, numC = 1) {
	return numA + numB + numC;
}

console.log(addThreeNumbersWithDefaults(2)); // will return 5

// stated args overwrite defaults (starting with first param)
function addThreeNumbersWithDefaults2(nA = 1, nB = 2, nC = 1) {
	return nA + nB + nC;
}

console.log(addThreeNumbersWithDefaults(2)); // still returns 5

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

const sentenceConstructor = (noun = "cat", adj = "white") => {
	return `The ${noun} is ${adj}.`;
};

console.log(sentenceConstructor());
console.log(sentenceConstructor("dog"));
console.log(sentenceConstructor("dog", "black"));
console.log(sentenceConstructor("black")); // defaults to 1st arg

// ternary operator

// basic syntax
const age = 22;
let access;

if (age > 21) {
	access = "Yes";
} else {
	access = "No";
}

console.log(access); // 'Yes'

// ternary syntax (uses "?" followed by if : else returns)
const age2 = 22;
let access2 = age2 > 21 ? "Yes" : "No";
let access3 = age2 < 21 ? "Yes" : "No";

console.log(access2); // 'Yes'
console.log(access3); // 'No'

// Convert the following `if...else` statement in to a ternary:
let pizza = "tasty";

if (pizza === "tasty") {
	console.log("yum");
} else {
	console.log("yuck");
}

// Your code here
let pizzaVal = "tasty";
let pizzaTern = pizzaVal === "tasty" ? "yum" : "yuck";
console.log(pizzaTern); // returns "yum"
// note that this doesn't affect above tern
pizzaVal = "gross";
console.log(pizzaTern); // still returns "yum"
// fixed by creating a new tern
let pizzaTern2 = pizzaVal === "tasty" ? "yum" : "yuck";
console.log(pizzaTern2); // returns "yuck"

// let pizzaTern2 = pizzaTern won't work cause it's a reference
// reminder: spread operator only works on iterables

// boolean gates (conditional vars based on truthy and falsy)
/* falsy: false, undefined, null, NaN, 0, empty strings */
/* truthy: anything that's not an above falsy type */

// && returns 1st falsy, unless all are truthy (then returns last)
const result = false && "foo";
console.log(result); // Output: false

const result2 = "hello" && "";
console.log(result2); // Output: ''

const result3 = "foo" && "bar";
console.log(result3); // Output: 'bar'

// || returns 1st truthy, unless all are falsy (then returns last)
const result4 = "" || "foo";
console.log(result4); // Output: 'foo'

const result5 = 2 || 0;
console.log(result5); // Output: 2

const result6 = "" || 0;
console.log(result6); // Output: 0

// useful for setting fallback/default values to variables
const myVar = true;
const result7 = "bar" && "foo";
const result8 = false || 243;
const result9 = 42 && false;
const result10 = myVar || 3000;

console.log("result1:", result7); // 'foo'
console.log("result2:", result8); // 243
console.log("result3:", result9); // false
console.log("result4:", result10); // true

/* REVIEW EXERCISES */

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."

let localLangConfig = null; // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
let LANG = localLangConfig || "en";
// b. Assign LANG the value of localLangConfig or 'en' as a default
// Your code here

// Log the result
console.log("Language setting:", LANG); // returns "en"

// with valid language config
localLangConfig = "fr";
// LANG is a variable, so it must be updated to change it
LANG = localLangConfig || "en";
console.log("Language setting:", LANG); // returns "fr"

// 2. SET WEBSITE THEME

let userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
let USER_THEME = null;
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default
USER_THEME = userSavedTheme || "light";

// Log the result
console.log("User theme setting:", USER_THEME);

// providing valid input
userSavedTheme = "dark";
USER_THEME = userSavedTheme || "light";

// Log the result
console.log("User theme setting:", USER_THEME);

// 3. OPTIONAL CHAINING

const adventurer = {
	name: "Alice",
};

// Example: console.log(adventurer.dog.name);
// TypeError: can't read properties of undefined nestd object

// fix this with added ternary after property in question
let dogName = adventurer.dog?.name;

console.log(dogName); // undefined (as dog still doesn't exist)

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer2 = {
	name: "Alice",
};

let catAge = adventurer2.cat?.age; // Your code here

console.log(catAge);

// updating object and trying again
adventurer2.cat = { name: "Fuzzy", age: 25 };
catAge = adventurer2.cat?.age; // Your code here
console.log(catAge);
