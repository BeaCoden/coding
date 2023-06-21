// 01) Write a String that logs out your first name
let firstName = "";

firstName += "B";
firstName += "e";
firstName += "a";
firstName += "t";
firstName += "r";
firstName += "i";
firstName += "c";
firstName += "e";

console.log(firstName);

// 02) Spot the problems & solve them
//     Copy the following code snippets to the script.js file and try to spot and fix the errors.

/// console.log("Hallo";
console.log("Hallo");

/// console.log("That doesn"t work");
console.log("That doesn't work");

/// console.log(50 + 2 > 52);
console.log(50 + 2 >= 52);

/// console.log("333" == 333);
console.log("333" === 333);

/// console.log(600 + 510 / 2);
console.log((600 + 510) / 2);

/// console.log("2" + 2);
console.log(Number("2") + 2);

// 03) Compare two conditions
///    Create a console.log that returns true when both division results are equal to 5
///console.log(25 / 5); // Result: 5
///console.log(50 / 10); // Result: 5

/// === vergleich (25 / 5 und 50 / 10) mit 5
/// && beide Vergleiche true
console.log(25 / 5 === 5 && 50 / 10 === 5);
