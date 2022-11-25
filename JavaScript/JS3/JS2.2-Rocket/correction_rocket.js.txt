'use strict';

/***********************************************************************************/
/* ******************************* DONNEES GLOBALES ********************************/
/***********************************************************************************/
const IMG_PATH = 'images/';
const START = 10;

let timer;
let count;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// Gestionnaire d'événement au clic sur le bouton de mise à feu
function onClickFiringButton()
{
    // Une fois que la mise à feu lancée, on désactive le bouton de mise à feu
    firingButton.removeEventListener('click', onClickFiringButton);
    firingButton.classList.add('disabled');

    // Programmation du décollage de la fusée à la fin du compte à rebours
    scheduleTakeOff();
    
    // Affichage initial du compte à rebours
    countDown();
    
    // Lancement du compte à rebours
    timer = window.setInterval(countDown, 1000);
    
    // On change la source de l'image de la fusée
    updateRocket('rocket2.gif');
}

/**
 * Programme le décollage de la fusée à la fin du compte à rebours
 */
function scheduleTakeOff()
{
    // Programmation du décollage pour dans x secondes
    setTimeout(function(){

        // On change la source de l'image de la fusée
        updateRocket('rocket3.gif');

        // On fait décoller la fusée en lui donnant la classe 'tookOff', la transition CSS fera le reste
        rocket.classList.add('tookOff');

    }, count * 1000);
}

/**
 * Gestion du compte à rebours
 *  */ 
function countDown()
{
    // Affichage sur le panneau du compte à rebours
    billboard.textContent = count;
    
    // On décrémente le compteur
    count--;
    
    // Si le compteur arrive à -1, on stoppe le chronomètre
    if( count == -1 ){
        
        window.clearInterval(timer);
    }
}

/**
 * Met à jour l'image de la fusée
 * @param {string} filename - Nom du fichier
 */
function updateRocket(filename)
{
    rocket.src = IMG_PATH + filename;
}


/**
 * Fonction qui permet de créer des étoiles
 * @param {number} number - le nombre d'étoiles à générer aléatoirement
 */
function createStars(number) {
    // l'ensemble des classes que peut prendre l'étoile
    let starSize = ["tiny", "normal", "big"];
    // Créer une div avec l'id "stars";
    let starDiv = document.createElement("div"); // cré un balise <div></div>
    starDiv.setAttribute("id", "stars"); // ajouté un id="stars" à la div
    let main = document.querySelector("main");
    // Insérer l'élement créé avant le main
    document.body.insertBefore(starDiv, main);
    for (let i = 0; i < number; i++) {
        // Le nom de l'étoile
        let starName = "star-" + (i+1);
        // Création de l'étoile
        let star = document.createElement("div");
        star.setAttribute("id", starName);
        // Attribution d'une id à l'étoile
        star.className = "star";
        // Attribution d'une classe (tiny|normal|big) aléatoirement
        let classId = getRandomInteger(0, starSize.length - 1); // génère un nombre entre 0 et 2
        star.classList.add(starSize[classId]); // arr[]


        // Math.floor(number) - permet d'arrondir à l'entier inférieur le plus proche
        // Math.ceil(number) - permet d'arrondir à l'entier supérieur le plus proche
        // Math.round(number)

        // Attribution de propriétés left & right
        let starLeft = getRandomInteger(0, window.innerWidth);
        let starTop = getRandomInteger(0, window.innerHeight);
        
        star.style.top = starTop.toString() + "px";
        star.style.left = starLeft.toString() + "px";
        starDiv.append(star);
    }
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

// Initialisation des variables globales
count = 10;

// Sélection des différents éléments du DOM sur lesquels nous allons agir
const rocket = document.getElementById('rocket');
// const billboard = document.querySelector('#billboard span');
const billboard = document.getElementsByTagName('span');
const firingButton = document.getElementById('firing-button');

// Installation du gestionnaire d'événement au clic sur le bouton de mise à feu
firingButton.addEventListener('click', onClickFiringButton);

// Création aléatoire d'étoiles
createStars(150);
