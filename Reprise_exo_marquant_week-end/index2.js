// Programme TWO SUM
// Ecrire une fonction qui prend un tableau et un nombre en argument puis retourne 
// l'index des élements du tableau dont la somme est égale au nombre donné
function TwoSum(arr, number){
    //La variable newArray est un tableau qui contient tous les élements du tableau arr
    //passé en argument 
    let newArray=[...arr]
    //a et b ont été utilisées pour stocké les nombres du tableau dont la somme donne 
    //le deuxieme argument passé comme argument 
    let a=0;
    let b=0;
    //La premiere boucle for est utilisé pour parcourir le nouveau tableau 
    // la deuxieme est également utilisé pour parcourir le tableau de base en 
    //afin d'éffectuer une comparaison a chaque itération 
    for (let index = 0; index < newArray.length; index++) {
        for (let index1 = 0; index1 < arr.length; index1++) {
            //comparaison de chaque elements des deux tableau et verification automatique si
            // la somme est égale au deuxieme argument 
            if (newArray[index] + arr[index1]===number) {
                a=newArray[index];
                b=arr[index1];
            }
        }
    }
    // les deux valeurs a et b sont stockées finalement dans un tableau
    return [a,b]
}
console.log(TwoSum([10,2,1,3,1,3,0], 6))

//Programme check
//Ecrire une fonction qui prend un tableau et un nombre en argument puis retourne 
//l'index des élements du tableau dont la somme est égale au nombre donné
