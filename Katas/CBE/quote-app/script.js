"use strict";

const quoteText = document.getElementById("quote-text"); // Konstante für Zitat-Text
const quoteAuthor = document.getElementById("quote-author"); // Konstante für Zitat-Autor
const button = document.getElementById("getNewBtn");
const apiUrl = "https://api.quotable.io/random"; // Konstante für API-URL des Zitats
const defaultQuote = {
  // Standardzitat, falls API nicht erreichbar
  content: "Sei du selbst die Veränderung, die du dir wünschst für diese Welt.",
  author: "Mahatma Gandhi",
};

// Funktion zum Anzeigen des Standardzitats beim Start der App
function displayDefaultQuote() {
  displayQuote(defaultQuote);
}

// Funktion zum Anzeigen des Zitats auf der Seite
function displayQuote(quote) {
  quoteText.textContent = quote.content;
  quoteAuthor.textContent = `- ${quote.author}`;
}

// Funktion zum Abrufen eines zufälligen Zitats von der API
function loadQuote() {
  fetch(apiUrl) // fetch Methode zum Abrufen der API
    .then((response) => response.json()) // .then Methode die mit promise antwortet & Daten in JSON umwandelt
    .then((data) => {
      // .then Methode die mit data antwortet & Daten in data speichert
      displayQuote(data); // Aufruf der Funktion zum Anzeigen des Zitats
    });
}

// Funktion zum Behandeln des Klickereignisses des Buttons
function handleButtonClick() {
  loadQuote();
}

// Event-Handler für den Klick auf den Button
button.addEventListener("click", handleButtonClick);

// Aufruf der Funktion zur Anzeige des Standardzitats
displayDefaultQuote();
