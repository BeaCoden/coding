// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
/*Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7*/

const stringToNumber = function (str) {
  //defines a function named "stringToNumber" with parameter: str, keyword: function & variable: stringToNumber
  return Number(str); // Inside function passed string: str --> is converted to number using function: Number() --> converts a string into a numeric value, result using keyword: return
};

const input = "15896";
const result = stringToNumber(input);
console.log(result);
