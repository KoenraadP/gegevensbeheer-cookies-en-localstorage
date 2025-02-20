"use strict";

// afmelden knop koppelen
const btnLogoff = document.getElementById("logoff");

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

    location.href = "login.html";
})