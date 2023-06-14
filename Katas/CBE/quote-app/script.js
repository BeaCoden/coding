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

// Funktion zum Behandeln des Klickereignisses des Buttons

// Event-Handler für den Klick auf den Button

// Aufruf der Funktion zur Anzeige des Standardzitats
displayDefaultQuote();
