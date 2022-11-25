let tableau=["A", "B","C" , "D" , "E"];
let tableau2=[10, 20,30 , 40 , 50 , 60, 70,80,90];


function boucle(){
    let result=[];
    for(let loops=0; loops<tableau.length;loops++){
        result.push(tableau[loops]);
    }
    return result;
}
function plus(add) {
    add=add+1;
    return add;
}

tableau.forEach(element => {
    console.log(element);
});

tableau2.forEach(element => {
    let r=plus(element);
    console.log(r);
});

let stock=boucle();

function somme(){
    let sommes=0
   for(let i=0; i<tableau.length; i++){
        sommes+=tableau2[i];
   }
   console.log(sommes);
   return sommes;
}


let g=Date.UTC(2022);
console.log(g);
let h=Date.UTC(2022,1);
console.log(h);
let l=Date.UTC(2022,1,10);
console.log(l);