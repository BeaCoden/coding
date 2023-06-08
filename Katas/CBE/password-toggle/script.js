// Local Scope - querySelector Verweis zu CSS Klasse
const passwordInput = document.querySelector("#password");
const toggleButton = document.querySelector("#toggle-button");

// Event Listener - click Event auf toggleButton
toggleButton.addEventListener("click", function () {
  // führt dazu, dass die CSS-Klasse "show" hinzugefügt wird
  passwordInput.classList.toggle("show");

  // führt dazu, dass der Text im Button wechselt
  // wenn die Klasse "show" hinzugefügt wurde, dann wird der Text im Button "Hide Password" angezeigt
  if (passwordInput.classList.contains("show")) {
    toggleButton.textContent = "Hide Password";
    // wenn type="password" ist, dann wird der Text (das Passwort) im Inputfeld angezeigt
    passwordInput.type = "text";
  }

  // wenn die CSS-Klasse "show" entfernt wurde, dann wird der Text im Button "Show Password" angezeigt
  else {
    toggleButton.textContent = "Show Password";
    // wenn type="text" ist, dann wird der Text (das Passwort) im Inputfeld versteckt
    passwordInput.type = "password";
  }
});
