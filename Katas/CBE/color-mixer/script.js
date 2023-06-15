"use strict";

// Variablen deklarieren
const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const header = document.querySelector("header");
const randomColorButton = document.getElementById("randomColorButton");

// Default Ausgangsfarbe body bestimmen
document.body.style.backgroundColor = "dodgerblue";

// Event Listener für default Ausgangsfarbe als Kata-Teil-Aufgabe
window.addEventListener("load", () => {
  document.body.style.backgroundColor = "dodgerblue";
});

//  Funktion zum Aktualisieren der Farbe
/// aktuellen Werte der Slider abrufen & in Hexadezimalwerte umwandeln
function updateColor() {
  //  const Syntax-Elemente
  /// parseInt() wandelt Dezimalwerte in Ganzzahlen um
  /// redSlider.value, greenSlider.value & blueSlider.value sind User Werte (Slider) als Dezimalwerte
  /// toString(16) wandelt Ganzzahlen in Hexadezimalwerte um
  /// padStart(2, "0") fügt eine führende Null hinzu, falls der Hexadezimalwert nur aus einer Ziffer besteht
  const red = parseInt(redSlider.value).toString(16).padStart(2, "0");
  const green = parseInt(greenSlider.value).toString(16).padStart(2, "0");
  const blue = parseInt(blueSlider.value).toString(16).padStart(2, "0");

  // Farbe im Hex-Format erstellen
  const color = `#${red}${green}${blue}`;

  // Hintergrundfarbe des body-Elements aktualisieren
  document.body.style.backgroundColor = color;

  // Hex-Farbwert im header-ausgeben
  colorValue.textContent = color;
}

// Funktion zum Abrufen einer zufälligen Farbe
function fetchRandomColor() {
  fetch("https://dummy-apis.netlify.app/api/color") // API aufrufen
    .then((response) => response.json()) // Antwort in JSON umwandeln
    .then((data) => {
      // Daten verarbeiten
      const color = data.color; // Farbwert aus Daten extrahieren
      const hexColor = `#${color}`; // Farbwert in Hex-Format umwandeln

      // Hintergrundfarbe des body-Elements aktualisieren
      document.body.style.backgroundColor = hexColor;

      // Hex-Farbwert im header ausgeben
      colorValue.textContent = hexColor;

      // Slider auf die Werte der Farbe setzen
      /// in Ganzzahl umwandeln (parseInt)
      /// Farbwert in Dezimalwert umwandeln & extrahieren (slice)
      /// padStart (1, 3) = Ziffern hinzufügen falls nötig
      /// in Hexadezimalwert umwandeln (toString(16))
      const red = parseInt(color.slice(1, 3), 16);
      const green = parseInt(color.slice(3, 5), 16);
      const blue = parseInt(color.slice(5, 7), 16);

      // Slider auf die Werte der Farbe setzen
      redSlider.value = red;
      greenSlider.value = green;
      blueSlider.value = blue;

      // Slider aktualisieren
      updateColor();
    });
}

// Event Listener hinzufügen
randomColorButton.addEventListener("click", fetchRandomColor);
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
