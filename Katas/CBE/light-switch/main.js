// Zugriff Global Scope
/* außerhalb irgendeiner Funktion deklariert, 
jede Funktion kann drauf zugreifen*/

// Referenz zu HTML-Element mit ID lightSwitch
const btn = document.querySelector("#lightSwitch");

// Referenz zu HTML-Element title
const pageTitle = document.querySelector("#pageTitle");

// Referenz auf HTML body
const body = document.body;

// Zugriff Local Scope & bei User click-Aktion wird EventListener ausgeführt
btn.addEventListener("click", function () {
  // togglet "dark-mode" auf body-Element hin & her - wenn da entfernt und umgkehrt
  body.classList.toggle("dark-mode");

  // togglet "dark-btn" auf btn-Element hin & her - wenn da entfernt und umgkehrt
  btn.classList.toggle("dark-btn");

  //  Abfrage ob body CSS-Klasse dark-mode enthält
  /// classList.contains -> Methode - true / false
  if (body.classList.contains("dark-mode")) {
    // wenn false
    pageTitle.textContent = "Good Night";
  } else {
    // wenn true
    pageTitle.textContent = "Good Morning";
  }
});
