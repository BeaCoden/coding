//DESCRIPTION:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12

function quarterOf(month) {
  if (month <= 3) {
    // Monate 1-3
    return 1;
  } else if (month <= 6) {
    // Monate 4-6
    return 2;
  } else if (month <= 9) {
    // Monate 8-9
    return 3;
  } else {
    // Monate 10-12
    return 4;
  }
}

console.log(quarterOf(1));
console.log(quarterOf(5));
console.log(quarterOf(8));
console.log(quarterOf(11));
