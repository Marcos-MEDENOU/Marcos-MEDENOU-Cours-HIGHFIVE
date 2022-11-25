/*********************************
 * vous allez creer un script qui demande à l'utilisateur 2 nombres.
 * Le premier nombre sera le multiplicteur
 * Le deuxème nombre est l'index d'arrêt
 * En respectant le contrôle de sasie et les bonnes pratiques de programmation
 * Réalisez un script permettant d'afficher dans le navigateur une table de multiplication
 * Exemple: nombre1=1 et nombre2=5 devra afficher:
 * 1x0=0
 * 1x1=1
 * 1x2=2
 * 1x3=3
 * 1x4=4
 * 1x5=5
 *  Bonus 1
 * Afficher en plus de la table de multiplication la table d'adition, de soustration et de division
 * Bonus 2
 * 
 * document.getElementById(tableDeMultiplication).innerText+="votre résultat\n"
 */
function inputController(message){
    let myInput
    do{
        myInput=window.prompt(message);
    }while(myInput=="" || isNaN(Number(myInput)))
    
    return Number(myInput);
}
function calculate(multipliant,endIndex,operator){
    for (let i = 0; i <=endIndex; i++) {
        switch(operator){
            case "*": document.getElementById('tableDeMultiplication').innerText+=multipliant+"x"+i+"="+(multipliant*i)+"\n";
            break;
            case "+": document.getElementById('tableDeMultiplication').innerText+= multipliant+"+"+i+"="+(multipliant+i)+"\n";
            break;
            case "-": document.getElementById('tableDeMultiplication').innerText+= multipliant+"-"+i+"="+(multipliant-i)+"\n";
            break;
            case "/": 
            if(i===0){
                i++;
            }
            document.getElementById('tableDeMultiplication').innerText+= multipliant+"/"+i+"="+(multipliant/i) +"\n";
            break;
        }
        
    }
}
let nombre1=inputController("Entrez le mulitiplicateur");
let nombre2=inputController("entrez l'index de fin");
if(nombre1 && nombre2){
    calculate(nombre1,nombre2,'*');
    calculate(nombre1,nombre2,'/');
    calculate(nombre1,nombre2,'-');
    calculate(nombre1,nombre2,'+');
}