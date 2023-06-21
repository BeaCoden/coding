// 01) Spot the errors and fix them
/* 
const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20
*/

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result); // Greater than 20

// 02) oddEven function
///    Implement a oddEven function.

// console.log(oddEven(4));
/// result should be even

// console.log(oddEven(3));
/// result should be odd

// console.log(oddEven(-1));
/// result should be odd

// console.log(oddEven(10));
/// result should be even

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
// even

console.log(oddEven(3));
// odd

console.log(oddEven(-1));
// odd

console.log(oddEven(10));
// even

// 03) oldYoung function
///    Implement a oldYoung function.

// console.log(oldYoung(27));
/// result should be young person

// console.log(oldYoung(6));
/// result should be children

// console.log(oldYoung(-1));
/// result should be invalid parameter

// console.log(oldYoung(86));
/// result should be elder person

function oldYoung(age) {
  if (typeof age !== "number" || age < 0) {
    return "invalid parameter";
  } else if (age < 16) {
    return "children";
  } else if (age < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
// young person

console.log(oldYoung(6));
// children

console.log(oldYoung(-1));
// invalid parameter

console.log(oldYoung(86));
// elder person
