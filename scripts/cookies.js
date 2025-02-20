"use strict";

// juiste gebruikersnaam en wachtwoord instellen
const correctUser = "creo";
const correctPassword = "creo";

// HTML input tags koppelen
const userInput = document.getElementById("user-name");
const passwordInput = document.getElementById("password");

// HTML form koppelen
const form = document.getElementById("form");

// extra cookie for testing purposes
document.cookie = "school=Creo";

// huidige cookies tonen in console
console.log(document.cookie);

// controleren of er een cookie loggedIn is met value "true"
if (GetCookie("loggedIn") === "true") {
    // als dit zo is --> automatisch naar volgende pagina
    location.href = "success.html";
}

// submit event koppelen aan form
form.addEventListener("submit", function(e){
    // standaard gedrag formulier tegenhouden
    e.preventDefault();
    // controleren of login gegevens correct zijn
    if (userInput.value === correctUser
        && passwordInput.value === correctPassword) {
            // opslaan via cookies dat de login gelukt is
            // een cookie bestaat altijd uit een key en een value
            // bijvoorbeeld: user=Koenraad
            document.cookie = "loggedIn=true";
            // doorgaan naar pagina success.html
            // alternatieven: location.assign(), location.href =, ...
            // window.open("success.html");
            location.href="success.html";
        }    
})

// function die de waarde van een specifieke
// cookie opzoekt en als return geeft
// als mijn document.cookie bijvoorbeeld
// "loggedIn=false; school=Creo" is
// en ik doe GetCookie("school") dan
// wil ik als return "Creo"
function GetCookie(cookieName) {
    let cookieValue = "";
    // cookies apart in een array plaatsen
    const cookiesArray = document.cookie.split("; ")
    console.log(cookiesArray);
    // loopen door cookiesArray
    cookiesArray.forEach(element => {
        // iedere cookie splitsen in key en value
        const splitCookie = element.split("=");
        // element 0 is de key
        // element 1 is de value
        console.log(splitCookie);
        // controleren of de key van de huidige cookie 
        // in de loop gelijk is aan de parameter cookieName
        if (splitCookie[0] === cookieName){
            // als dit gelijk is, de value als return waarde
            cookieValue = splitCookie[1];
        }
    });
    // op het einde ofwel de gevonden waarde als return
    // ofwel een lege string
    return cookieValue;
}

console.log(GetCookie("school"));
