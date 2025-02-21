"use strict";

// greeting <p> koppelen
const greetingPar = document.getElementById("greeting");

// alle links verzamelen
const languageLinks = document.querySelectorAll(".language-link");

// button koppelen
const clearBtn = document.getElementById("clear");

// controleren welke taal eventueel opgeslagen werd
// de key die we gekozen hebben is "language" --> let op altijd string
const chosenLanguage = localStorage.getItem("language");

// function uitvoeren om taal in te stellen
greetingPar.textContent = ChangeLanguage(chosenLanguage);

// click event koppelen aan alle links
languageLinks.forEach(element => {
    element.addEventListener("click", function (e) {
        // pagina mag niet herladen worden bij klikken
        e.preventDefault();
        // gekozen taal --> nl/fr/en
        const chosenLanguage = element.id;
        // gekozen taal in localStorage opslaan
        localStorage.setItem("language",chosenLanguage);
        // greeting aanpassen met function
        greetingPar.textContent = ChangeLanguage(chosenLanguage);
    })
});

// als ik klik op de clear knop
// wil ik de gekozen taal weer wissen uit localStorage
clearBtn.addEventListener("click",function(){
    // language element verwijderen uit ls
    localStorage.removeItem("language");
    // alternatief is localStorage.clear() maar dan worden alle keys gewist
    // pagina herladen
    location.reload();
})

// function die als parameter een taal krijgt (nl/fr/en)
// en op basis daarvan als return de begroeting
// in de juiste taal heeft
// gebruik bijvoorbeeld: ChangeLanguage("en") 
// --> leidt tot return "Good morning!"
function ChangeLanguage(language) {
    // variabele voor de boodschap/begroeting
    let greeting = "";
    // keuze maken op basis van language parameter
    // kan ook met if/else
    switch (language) {
        case "en":
            greeting = "Good morning!";
            break;
        case "fr":
            greeting = "Bonjour!";
            break;
        default:
            greeting = "Goedemorgen!";
            break;
    }
    // gekozen greeting als return waarde
    return greeting;
}

// eerste versie hieronder die enkel voor de Franse link werkt

// link voor Frans koppelen
// const frenchLink = document.getElementById("fr");

// click event voor frenchLink
// frenchLink.addEventListener("click", function(e) {
//     // standaard zal een link zonder doel
//     // de pagina herladen, dit willen we niet
//     e.preventDefault();
//     // inhoud van greeting <p> aanpassen
//     greetingPar.textContent = "Bonjour!";
// })