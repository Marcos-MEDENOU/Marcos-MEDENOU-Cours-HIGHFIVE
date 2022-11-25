
//first program
// let userName=window.prompt("Quel est votre prénom");
// console.log("Salut "+userName);
//second program
// let userOperation=window.prompt("Taper le calcul que vous souhaitez éffectuer");
// console.log(userOperation + "=" + eval(userOperation));

let lastName=window.prompt("Tapez votre nom svp!");
let firstName=window.prompt("Taper votre prénom!")
let month=window.prompt("Taper votre année de naissance");
let old=2022-month;
let d=new Date();
document.write("Bonjour "+ lastName + " " +firstName + ", vous etes agé de "+ old + "ans. merci d'avoir répondu" +"<br>");
document.write("Bonjour Windows 10 tu as été concu en "+ d.getFullYear());

let numberChance=window.prompt("Taper votre chiffre bonheur");
let j=d.getDate();
let f=numberChance/j;
let m = f%2;
switch(m){
    case 0:
        document.write("Vous etes chanceux" +"<br>");
        break;
    case 1:
        document.write("Faites attention");
        break;
}
