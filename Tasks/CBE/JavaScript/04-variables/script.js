// 01) Spot the errors and fix them

/// userName = "Jenna";
/// Fehler: Wert der konstanten Variablen nicht änderbar

/// const userName = Brad;
/// fehlende Anführungszeichen
const userName = "Brad";

/*function getUserNameLength {
  return const result = name.length
} */
/// Fehler: Variable 'name' existiert nicht und kein 'const'innerhalb 'return'-Statements

function getUserNameLength() {
  const result = userName.length;
  return result;
}

/// console.log(getUserNameLength(userName) > 4) --> Should log true
/// Fehler: Funktion getUserNameLength() benötigt keine Parameter -  Wert bereits in der Variablen 'userName' zugewiesen
console.log(getUserNameLength() > 4);

// 02) isString function
///    Implement a isString function.

/// The function has one parameter which could be any kind of data type
/// The function is written as a function expression
/// The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
