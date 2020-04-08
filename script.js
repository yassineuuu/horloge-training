// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
setInterval(demarrerLaMontre,1000)
const date = new Date();
//Ajouter l'heure , minite , seconde  dans des varaiables
const second = date.getSeconds() /60,
            minute = (second+date.getMinutes()) /60,
            heure = (minute+date.getHours()) /12
            ;
// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
// Déplacer les aiguilles 
function demarrerLaMontre() {
    
AIGUILLEHR.style.transform=`rotate(${heure*360}deg)`;
AIGUILLEMIN.style.transform=`rotate(${minute*360}deg)`;
AIGUILLESEC.style.transform=`rotate(${second*360}deg)`;
}
demarrerLaMontre();

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);