//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
/*
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []*/
//You can assume that all values are integers. Do not mutate the input array/list.

function invert(numbers) {
  // Funktion "invert" enthält  Array & "numbers" als Parameter
  let invert = []; // leeres Array "inverted" wird erstellt, um invertierten Werte zu speichern
  for (let i = 0; i < numbers.length; i++) {
    invert.push(-numbers[i]); // mit "-numbers[i]" wird negatives Gegenstück des Elements an aktueller Position im Array "numbers" erzeugt & mit "push"-Methode Array "inverted" hinzugefügt.
  }
  return invert;
}

let numbers = [-8, -9, -11, 15, -2];
let invertNumbers = invert(numbers);
console.log(invertNumbers);
