// EXERCICES 1 :Écrire un programme qui permet de ressortir la longueur d’un tableau ou d’une chaîne de caractère 
// ‘marcos’ =>6

function tabLength(tab){
    return tab.length;
}

// EXERCICES 2 : Écrire un programme qui permet de compter le nombre de fois qu’il y a une lettre dans une chaîne de caractère 
// ou dans un tableau. Il peut s’agir d’une fonction qui reçoit en argument la chaîne de caractère ou le tableau et la lettre a compter.
// ‘medenou’, m => 1 fois 

function lettersNumber(str, num){
    return str.split('').filter(function(e){return e==num;}).length
}

// EXERCICES 3 : Écrire un programme qui permet de retirer un caractère préciser dans un chaîne de caractère ou dans un tableau.
// ‘string’, s => tring

function deleteLetter(str, caract){
    return [...str].filter(function (e){return e!==caract}).join('')
}

// EXERCICE 4 :Écrire un programme qui permet de transformer par bon de 2 chacune des lettres du nom de l’utilisateur en majuscule.
// Indication :Pensez a traiter les espaces au cas ou l’utilisateur en mettait
// Medenou marcos => MeDeNoU MaRcOs

function NameEspaceTwo(str){
    return str.split('').map(function(e,v){
        return e=e.toLowerCase().replace(e.charAt(0).toLowerCase(), e.charAt(0).toUpperCase())
    })
}
console.log(NameEspaceTwo("marcos medenou je me nomme"));

