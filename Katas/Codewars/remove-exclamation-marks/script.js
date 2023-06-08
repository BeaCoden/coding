// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(str) {
  return str.replace(/!/, "").replace(/!/, "").replace(/!/, ""); // findet "!" und ersetzt als string
}

let input = "Hello!! This is an example!";
let result = removeExclamationMarks(input);

console.log(result);
