"use strict";

// afmelden knop koppelen
const btnLogoff = document.getElementById("logoff");

// username opvragen uit cookie
const user = GetCookie("user");

// <p> koppelen
const welcomePar = document.getElementById("welcome");

// boodschap in <p> platsen
welcomePar.textContent = "Hallo " + user + "!";

// click event voor knop
btnLogoff.addEventListener("click",function(){
    // als er geklikt wordt op Afmelden
    // dan moet de loggedIn cookie verzet worden
    // naar false en moet ik weer terug naar
    // de login.html pagina

    // versie 1: waarde van loggedIn op false plaatsen
    // document.cookie = "loggedIn=false";

    // versie 2: loggedIn cookie volledig verwijderen
    // toevoegen: expires= en dan datum in het verleden of nu
    // in specifieke vorm
    document.cookie = "loggedIn=;expires=Thu, 20 Feb 2025";
    document.cookie = "user=;expires=Thu, 20 Feb 2025";

    location.href = "login.html";
})

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