'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let button=document.querySelector('#firing-button')
let button2=document.querySelector('#cancel-button')
let screenView=document.querySelector('#billboard')
let roket2=document.querySelector('#rocket')
let body=document.querySelector('.container')

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

//La fonction permet de decrementer le compteur de 10 a 0 avant le demarrage de la fusée 3WA
let compter=10;

/**
 * La fonction permet de decrementer le compteur de 10 a 0 avant le demarrage de la fusée 3WA
 * 
 */
function comptage(){
    document.getElementById('span').innerText=compter;
    compter--;
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
button2.addEventListener('click', function(events){
    events.preventDefault()
    roket2.classList.remove('tookOff')
})
button.addEventListener('click', function(){

    compter=10;
    button.classList.add('disabled'); 
    let a=setInterval(() => {  
        comptage();    
        roket2.src="images/rocket2.gif";   
        if(compter==-1){
            clearInterval(a);
            roket2.src="images/rocket3.gif"; 
            document.getElementById('span').innerText=0;
            roket2.classList.add('tookOff')
        }
    }, 1000);
})

for(let compter2=0; compter2<=1000; compter2++){
    body.classList.add('star.big')
}