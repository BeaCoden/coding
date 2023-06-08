// Slider-Elemente aus HTML abrufen
const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

// HTML Element header abrufen
const header = document.querySelector("header");

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

// Event Listener zu Slidern hinzufügen
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Initial die Farbe aktualisieren
updateColor();
