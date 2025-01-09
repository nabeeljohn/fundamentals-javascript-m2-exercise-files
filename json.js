// Javascript objec
let employee = {
    firstName: "Nabeel",
    lastname: "John",
    birthdate: new Date("October 23, 1983"),
    numYearsEmployment: 11,
    department: "Integration Engineering",
    title: "Integration Engineer",
    isActive: true,
    salary: 10000
};

// Convert to JSON string
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);

// Conver JSON back to Object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

// Writing JSON directly
let jsonString = `{
    "firstName": "Elizabeth",
    "lastname": "Jones"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

// Improperly formatted JSON
let notJSON = "Hello!";
//let newObj = JSON.parse(notJSON); //will return an error