// Creating single-line strings
let firstName = "David";
let lastName = 'Tucker';
let title = `VP Engineering`;
tutke = 'CTO';

// String concatenation with the plus operator
let fullName = firstName + " " + lastName;

// String concatenation with template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Creating multi-line strings with \n
let bio = "Line 1\nLine 2\nLine 3";
console.log(bio);

// Creating multi-line strings with backtickets
bio = `Hi my name is Nabeel John.
I am from NY.
Thank you!`;
console.log(bio);

//Escaping characters
let quote = 'David said, "Hello!"';
quote = "David said, \"Helloooo!!\"";
quote = `'David said, "HelloJee"'`;
quote = `David said \\ what!`;
console.log(quote);


// String length
let length = quote.length;
console.log(length);

// Accessing specific characters
let secondChar = quote[0];
console.log(secondChar);

//Changing case
let upperCase = fullName.toUpperCase();
console.log(upperCase);

//Finding a substring
let idx1 = fullName.indexOf("Dav");
console.log(`Index 1: ${idx1}`);

// Does a string contain a substring
let doesContain = fullName.includes("Dav");
console.log(doesContain);

// Done with strings