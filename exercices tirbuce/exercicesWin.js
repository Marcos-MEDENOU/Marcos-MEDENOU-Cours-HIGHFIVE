// code version champagne 
'use strict'
// ## Exercice 1: FirstUpperCase
function firstUpperCase(texte) {
    return texte.split(' ').map(function(e){return e.replace(e.charAt(0).toLowerCase(), e.charAt(0).toUpperCase())});
}
// ## Exercice 2: LongestWord

function longestWord(string){
    return string.split(' ').map(function(e){return (e.length);}).sort(function(a,b){return a-b}).slice(-1).join()
}

// ## Exercice 3: LargestNumber

function largestWord(arr){
    return arr.sort(function(a,b){return a-b;})[arr.length-1]
}

// ## Exercice 4: ConfirmEnd

function confirmEnd(string, end){
    return string.slice(-end.length)===end
}

// ## Exercice 5: Tracage

function truncate(str, num){
    return str.length>num?str.slice(0, num)+'...':str
}

// ## Exercice 6:  Les détectives

function findElement(arr, callback){
    return arr.filter(callback)[0];
}
console.log('ici');
function findElement2(arr){
    return arr.filter(Boolean)
}
console.log(findElement2([1,4,' ', 0, undefined,5,7,NaN, ""]));

// ## Exercice 7: Les perroquets

function repeat(string, num){
    return Array.from({length:num}, (v,e)=>e).map(v=>string).join('')
}

// ## Exercice 8: Factorisation

function factorialize(number){
    return Array.from({length:number+1} , (v,e)=>e).slice(1).reduce(function(prev, suiv){return prev*suiv;})
}

// ## Exercice 9: Téléportation et Fusion

function frankenSplice(arr1, arr2, index){
    return arr2.slice(0,index).concat(arr1).concat(arr2.slice(index))
}

// ## Exercice 10: Faux Videurs
function bouncer (arr){
    return arr.filter(x=>x);
}

//test codewar

function countPositivesSumNegatives(input) {
    // your code here
    let tableau=[]; 
    let tableau1=[]; 
    let tableau2=[]; 
    let tableau3=[];

    for(let i=0; i<input.length; i++){
        if(input[i]!==0){
            tableau3.push(input[i])
        }
    }
    console.log(tableau3);
    for(let i=0; i<tableau3.length; i++){
      
      if(tableau3[i]>0){
        tableau1.push(tableau3[i])
      }else if(tableau3[i]<0){
        tableau2.push(tableau3[i])
      }
    }
    if(input.length==0 && input==null){
        return []
    }
    return [tableau1.length,tableau2.reduce(function (e,v){
      return e+v;
    },0)]
    
}
console.log(countPositivesSumNegatives([]));
