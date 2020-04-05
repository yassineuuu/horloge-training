// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

var date = new Date();
//Ajouter l'heure , minite , seconde  dans des varaiables
var heure = date.getHours();
var minite = date.getMinutes();
var second = date.getSeconds();

var time = [heure,minite,second]



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre(b) {
    for(i=0;i<b;i++){
        AIGUILLESEC.style.transform = "rotate("+i+"deg)";
        
    }


}
demarrerLaMontre(360);

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);