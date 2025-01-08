// Type conversion
let strValue = "Hi";
console.log(typeof(strValue));

let numValue = 100;
console.log(typeof(numValue));

let boolValue = true;
console.log(typeof(boolValue));


// Joinins a string with the number
let age = 40;
let name = "David";
let myString = `${name} is ${age} years old`;
console.log(myString);

let ageString = "40";
let ageInt = Number(ageString);
console.log(typeof(ageInt));

let ageObject = new Number(ageInt);
console.log(typeof(ageObject));


// Using NaN
let ageString02 = "fourty";
let ageNum02 = Number(ageString02);
console.log(ageNum02);
console.log(isNaN(ageString02));

// Using and converting to boolean
let num01 = 1;
let num02 = 0;
let num01Bool = Boolean(num01);
let num02Bool = Boolean(num02);
console.log(`Num01: ${num01Bool} & Num02: ${num02Bool}`);

let boolString = "Hello";
let boolStringBoolean = Boolean(boolString);
let boolStringEmpty;
let boolStringEmptyBoolean = Boolean(boolStringEmpty);
console.log(`BoolString= ${boolStringBoolean} & BoolStringEmpty: ${boolStringEmptyBoolean}`);