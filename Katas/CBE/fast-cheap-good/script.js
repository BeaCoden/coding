// Wählt HTML-Elemente mit den entsprechenden IDs aus
const checkBox = document.getElementById("fast");
const checkBox2 = document.getElementById("cheap");
const checkBox3 = document.getElementById("good");

// Fügt Event-Listener hinzu, um Änderungen an den Checkboxen zu überwachen
checkBox.addEventListener("change", myFunction);
checkBox2.addEventListener("change", myFunction);
checkBox3.addEventListener("change", myFunction);

// Funktion myFunction wird aufgerufen, wenn sich der Zustand einer Checkbox ändert
function myFunction() {
  // Überprüft die Zustände der Checkboxen und führt die entsprechenden Aktionen aus
  if (checkBox.checked && checkBox2.checked && checkBox3.checked) {
    // Wenn alle drei Checkboxen aktiv sind, wird die Auswahl der vorherigen Checkbox aufgehoben
    if (this === checkBox) {
      checkBox2.checked = false;
    } else if (this === checkBox2) {
      checkBox.checked = false;
    } else if (this === checkBox3) {
      checkBox.checked = false;
    }
  }
}
