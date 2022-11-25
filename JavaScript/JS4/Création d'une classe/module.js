
import {Request} from "./request.js";

/**************************************
            VARIABLES
*************************************/

let input=document.querySelectorAll('input')
console.log(input)

/**************************************
    AJOUT D'UN ECOUTEUR D'EVENEMENT 
*************************************/
document.addEventListener('submit' , function(e){
    e.preventDefault();
    //Instanciation de la classe Request 
    const request=new Request(input);
    //Appel de la méthode getInputs() definis dans la classe Request
    request.getInputs();
})
