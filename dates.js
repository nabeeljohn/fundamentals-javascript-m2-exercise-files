// Creating dates
let date1 = new Date("2023-01-01");
console.log(date1);

let date2 = new Date("January 1, 2023");
console.log(date2);

let date3 = new Date();
console.log(date3);

let date4 = new Date("2023-01-01T02:30:04.312-05:00");
console.log(date4);

let date05 = new Date(2024, 0, 1, 2, 30, 4);
console.log(date05);

// Accessing elements from a date
console.log(`Full Year: ${date05.getFullYear()}`);
console.log(`Month (zero-indexed): ${date05.getMonth()}`);
console.log(`Day of the Month: ${date05.getDate()}`);
console.log(`Hours: ${date05.getHours()}`);

//Milliseconds from the epoch
console.log(`Time: ${date05.getTime()}`);
let date06 = new Date(0);
console.log(date06.toUTCString());