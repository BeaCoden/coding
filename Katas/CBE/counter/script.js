"use strict";

// HTML-Elemente Referenzen
const counterLabel = document.getElementById("counter");
const mainSection = document.querySelector("#main");
const resetButton = document.querySelector("button");

// Variablen initialisieren
let counterValue = 0;
let colorValue = 0;

// Funktion für Zähler
function counting() {
  // Zähler erhöhen, Ziffer ändern & Hintergrundfarbe ändern
  counterValue++; // Zähler um 1 erhöhen
  counterLabel.textContent = counterValue; // Ziffer ändern
  colorValue += 1; // Farbe um 1 erhöhen

  // ändern der Hintergrundbild-Größe im HTML-Element basierend auf colorValue
  /// style = CSS-Attribut
  /// Hintergrundfarbe verändert sich konstant, zu Zählerwert weil der erhöht wird
  /// "0% 100%" = Breite 0% & Höhe immer 100%
  mainSection.style.backgroundSize = colorValue + "%" + " 100%";
  // wenn Farbe 100% erreicht hat, wieder auf 0 setzen
  if (colorValue >= 100) {
    colorValue = 0;
  }
}

// Eventlistener für Klick auf weißen Hintergrund
mainSection.addEventListener("click", counting);

// Eventlistener für Klick auf Reset-Button
resetButton.addEventListener("click", () => {
  mainSection.style.backgroundSize = "0% 0%"; // Hintergrundbild-Größe zurücksetzen
  colorValue = 0; // Farbe zurücksetzen
  counterValue = 0; // Zähler zurücksetzen
  counterLabel.textContent = counterValue; // Ziffer zurücksetzen
});

// Eventlistener für Tastendruck Enter & Space
document.addEventListener("keydown", (event) => {
  // wenn Enter oder Space gedrückt wurde, Funktion counting aufrufen
  if (event.key === "Enter") {
    counting();
  } else if (event.key === "Space") {
    counting();
  } else {
    // wenn andere Taste gedrückt wurde, nichts machen
    return false;
  }
});
