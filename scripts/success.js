"use strict";

// afmelden knop koppelen
const btnLogoff = document.getElementById("logoff");

// click event voor knop
btnLogoff.addEventListener("click",function(){
    // als er geklikt wordt op Afmelden
    // dan moet de loggedIn cookie verzet worden
    // naar false en moet ik weer terug naar
    // de login.html pagina
    document.cookie = "loggedIn=false";
    location.href = "login.html";
})