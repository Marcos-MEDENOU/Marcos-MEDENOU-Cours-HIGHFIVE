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
    let result=[];
    for (let i = 0; i <=endIndex; i++) {
        switch(operator){
            case "*": result.push(multipliant+"x"+i+"="+(multipliant*i)+"\n");
            break;
            case "+": result.push(multipliant+"+"+i+"="+(multipliant+i)+"\n");
            break;
            case "-": result.push(i+"-"+multipliant+"="+(i-multipliant)+"\n");
            break;
            case "/": 
            result.push(i+"/"+multipliant+"="+parseInt((i/multipliant)) +"\n");
            break;
        }
        
    }
    return result;
}
let nombre1=inputController("Entrez le mulitiplicateur");
let nombre2=inputController("entrez l'index de fin");
if(nombre1 && nombre2){
    let multiplication=calculate(nombre1,nombre2,'*');
    let division=calculate(nombre1,nombre2,'/');
    let soustraction=calculate(nombre1,nombre2,'-');
    let addition=calculate(nombre1,nombre2,'+');
    
    addition.forEach(elements=> {
        document.getElementById('adition').innerText+=elements;
    });
    soustraction.forEach(elements=> {
        document.getElementById('soustraction').innerText+=elements;
    });
    division.forEach(elements=> {
        document.getElementById('division').innerText+=elements;
    });
    multiplication.forEach(elements=> {
        document.getElementById('multiplication').innerText+=elements;
    });
}
