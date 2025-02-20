"use strict";

// juiste gebruikersnaam en wachtwoord instellen
const correctUser = "creo";
const correctPassword = "creo";

// HTML input tags koppelen
const userInput = document.getElementById("user-name");
const passwordInput = document.getElementById("password");

// HTML form koppelen
const form = document.getElementById("form");

// submit event koppelen aan form
form.addEventListener("submit", function(){
    // controleren of login gegevens correct zijn
    if (userInput.value === correctUser
        && passwordInput.value === correctPassword) {
            // doorgaan naar pagina success.html
            window.open("success.html");
        }    
})