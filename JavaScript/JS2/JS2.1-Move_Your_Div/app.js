/* Exercice - Move Your Div
Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.
*/
let contain=document.querySelector('.container')
let blockMove=document.querySelector('.red');
let buttonClick=document.getElementById('moveDiv')
let textBlock=document.querySelector('.modal')
let hidden1=document.querySelector('#hideModal')

//Chargement du DOM AVANT que les evenements ne soit active
document.addEventListener('DOMContentLoaded',  function(){
    //Ajout d'un ecouteur d'evenement qui  stipule qu'au click sur hidden1, tout le contenu soit exécuté
    hidden1.addEventListener('click', function(items){
        textBlock.style.display='none'
    });
    //Initialisation d'un compteur a 0
        let compter=0;

        //Ajout d'un ecouteur d'evenement qui  stipule qu'au click sur buttonClick, tout le contenu soit exécuté
        document.addEventListener('keydown', function(items){
            if(items.key==='SPACE'){

                 //switch ici permet de verifier a chaque fois la valeur du compteur et l'incrémenter peu importe le nombre de clic
            switch(compter){
                //cas ou valeur du compteur est égale a 0
                case 0:
                    blockMove.classList.remove('red');
                    contain.classList.remove('modal-active');
                    blockMove.classList.add('red1'); 
                    // setTimeout(() => {
                    //     blockMove.classList.add('red1'); 
                    // }, 2000);
                    compter++;
                    break;
                //cas ou valeur du compteur est égale a 1
                case 1:
                    blockMove.classList.remove('red1');
                    blockMove.classList.add('red2');
                    contain.classList.remove('modal-active');
                    compter++;
                    
                    break;
                //cas ou valeur du compteur est égale a 2
                case 2:
                    blockMove.classList.remove('red2');
                    blockMove.classList.add('red3');
                    contain.classList.remove('modal-active');
                    compter++;
                    
                    
                    break;
                //cas ou valeur du compteur est égale a 3 mais pris en compte comme la dernier valeur possible
                default:
                    blockMove.classList.remove('red3');
                    blockMove.classList.add('red');
                    contain.classList.add('modal-active');
                    // textBlock.classList.add('active');
                    
                    // setTimeout(() => {
                    //     contain.classList.add('modal-active');
                    // }, 2000);
                    compter=0;
                    
                    break;

                    // compter=0 permet de revenir a case 0 pour affectuer a nouveau les instructions au cas ou le 
                    // nombre de clic dépasse 4
            }
            }
        })

            

           
    

});




        // buttonClick.addEventListener('click', function(items){
        //     blockMove.classList.remove('red');
        //     blockMove.classList.add('red1');
        //     buttonClick.addEventListener('click', function(items){
        //         blockMove.classList.remove('red1');
        //         blockMove.classList.add('red2');
        //         buttonClick.addEventListener('click', function(items){
        //             blockMove.classList.remove('red2');
        //             blockMove.classList.add('red3');
        //             buttonClick.addEventListener('click', function(items){
        //                 blockMove.classList.remove('red3');
        //                 blockMove.classList.add('red');
        //             });
        //         });
        //     });
        //     console.log('marcos');
        // })