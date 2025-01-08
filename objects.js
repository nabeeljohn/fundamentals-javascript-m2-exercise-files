// Create an object with an object literal (preferred)
let obj1 = {};

// Create an object with a constructure
let obj2 = new Object();

// Populate properties on an object
obj1.firstName = "David";
obj1.lastName = "Tucker";
obj1.isActive = true;
obj1.startDate = new Date("January 1, 2022");
obj1.vacationDays = 14;
console.log(obj1);

// Populating an object on creation with object literal syntax
let obj3 = {

    firstName: "David",
    lastName: "Tucker",
    isActive: true,
    startDate: new Date("January 1, 2022"),
    vacationDays: 14
}
console.log(obj3);

// Accessing properties from an object
console.log(`First Name: ${obj1.firstName}`);
console.log(`First Name: ${obj3["firstName"]}`);

//Deleting properties from an object
delete obj1.firstName;
console.log(obj1);

// Acessing a property that doesnt exists
console.log (`Non-existant value: ${obj1.middleName} and ${obj3["lastName"]}`);

//Objects are passed by refernce, not value
let obj4 = obj3;
obj4.lastName = "Smith";
console.log(obj3.lastName);