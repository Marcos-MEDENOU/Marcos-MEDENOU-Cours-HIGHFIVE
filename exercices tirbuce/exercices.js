//exercice 1
function firstUpperCase(texte){
        let textTransform=texte.split(' ');
        let tableau=[];
            for (let index = 0; index < textTransform.length; index++) {
                b=textTransform[index].replace(textTransform[index].charAt(0).toLowerCase(),textTransform[index].charAt(0).toUpperCase())
               tableau.push(b)
            }
            return tableau.join(' ')
        }

console.log(firstUpperCase("bonjour je suis marcos medenou"));
console.log(firstUpperCase("bonjour"));

//exercice 2
function LongestWord(stringChaine){
            textTransform=stringChaine.split(' ');
            let tableau=[]; 
            for (let index = 0; index < textTransform.length; index++) {
                tableau.push(textTransform[index].length);   
            }
            return tableau.sort(function(a,b){
                return a-b;
            })[tableau.length-1]
        }
        console.log(LongestWord("Bonjour à tous"))
        console.log(LongestWord("les chaussettes de l'archiduchesse"));

//EXERCICE 3

function largestWord(arr){
            return arr.sort(function(a,b){
                return a-b;
            })[arr.length-1]
        }
        console.log(largestWord([20, 32, 97]))
        console.log(largestWord([156, 851, 138]))
        console.log(largestWord([357, 195, 759]))

//EXERCICE 4

        function confirmEnd(string, end){
            if(string.charAt(string.length-1)==end){
                return true;
            }else{
                return false;
            }
        }
        console.log(confirmEnd("bonjour", "n"));
        console.log(confirmEnd("bonjour", "r"));

//exercice 5

function truncate(str, num) {
                if(str.length > num){
                    return str.slice(0, num)+ "..."
                }else{
                    return str
                }
            }
            console.log(truncate("bonjour à tous", 5));
            console.log(truncate("salut", 8));

//exercice 6

 function findElement(tableau){
                    let valeur=0
                    let tableau2=[]; 
                    for (let index = 0; index < tableau.length; index++) {
                        switch(tableau[index] % 2){
                            case 0:
                            tableau2.push(tableau[index])
                            break;   
                        }
                    }
                    return tableau2[0]
                 }
                console.log(findElement([1, 3, 5, 8, 9,10]));
                console.log(findElement([1, 3, 5, 9]));

//exercice 7 

function repeat (string, num){
                let a=''
                for (let index = 0; index < num; index++) {
                    a=a+string  
                }
                return a; 
            }

            console.log(repeat ("abc", 3));
            console.log(repeat ("*", 3));


//exercice 8

function factorialize(number){
                let fact =1;
                for (let index = 1; index < number+1; index++) {
                    fact=fact*index;    
                }
                return fact; 
            }
            console.log(factorialize(3));

//exercice 9

// frankenSplice([1, 2, 3], [4, 5], 1) devrait retourner [4, 1, 2, 3, 5]
            // frankenSplice([1, 2], ["a", "b"], 1) devrait retourner ["a", 1, 2, "b"]
            // frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) devrait retourner ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
            // Tous les éléments du premier tableau devrait être additionnés au second tout en respectant l'ordre de départ.
            // frankenSplice([1, 2, 3, 4], [], 0) devrait retourner [1, 2, 3, 4]

            function frankenSplice(arr1, arr2, index){
                /* let tableau=[]; 
                for (let indexx = 0; indexx < arr2.length; indexx++) {
                    tableau.push(arr2[indexx])
                   if(indexx==index-1){
                        for (let indexxx = 0; indexxx < arr1.length; indexxx++) {
                            tableau.push(arr1[indexxx])
                        }
                    }  
                } */
                let array1=arr1.slice(0,arr1.length)
                let array2=arr2.slice(0,arr2.length)
                 array2.splice(index,0,...array1)
                 return array2;
            }
            console.log(frankenSplice([1, 2, 3], [4, 5], 1));
            console.log(frankenSplice([1, 2], ["a", "b"], 1));
            console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
            console.log(frankenSplice([1, 2, 3, 4], [], 0));

//exercice 10

      function bouncer(arr){ 
                // return arr.filter(x=>x)
                return arr.filter(Boolean)
            }
            console.log(bouncer([7, "ate", "", false,9]))
            console.log(bouncer(["a", "b", "c"]))
            console.log(bouncer([false, null, 0, NaN, undefined, ""]))
            console.log(bouncer([null, NaN, 1, 2, undefined]))

//exercice 11


            function getIndexToIns(arr, toInsert){
                let arrSort= arr.sort(); 
                arrSort.push(toInsert);
                let arr2=arrSort.sort(function(a,b){
                return a-b;
                }); 
                return arr2.indexOf(toInsert);
            }
            console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
            console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
            console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
            console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
            console.log(getIndexToIns([40, 60], 50));
            console.log(getIndexToIns([3, 10, 5], 3));
            console.log(getIndexToIns([5, 3, 20, 3], 5));
            console.log(getIndexToIns([20,3,5], 19));

//exercice 12

/* function mutation(arr){
    let firstCaract=arr[0].toLowerCase();
    let secondCaract=arr[1].toLowerCase();
    for(let i=0; i<secondCaract.length; i++){
        if(arr[0].indexOf(firstCaract.length) && arr[0].charAt(firstCaract.length) !==arr[1].indexOf(secondCaract.length) && arr[1].charAt(secondCaract.length)){
            return false;
        }else {
            return true;
        }
        return arr
    }
} */
            var mutation =([f,s])=> 
                [...s.toLowerCase()].every(c=>
                [...f.toLowerCase()].includes(c)); 

console.log(mutation(["hello", "hey"]));
                console.log(mutation(["hello", "hello"]));
                console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
                console.log(mutation(["Mary", "Army"]));
                console.log(mutation(["Mary", "Aarmy"]) );
                console.log(mutation(["Alien", "line"]));
                console.log(mutation(["floor", "for"]) );
                console.log(mutation(["hello", "neo"]));
                console.log(mutation(["voodoo", "no"]));
                console.log(mutation(["ate", "date"]));
                console.log(mutation(["Tiger", "Zebra"]));
                console.log(mutation(["Noel", "Ole"]));
                
// chunkArrayInGroups(["a", "b", "c", "d"], 2) devrait retourner [["a", "b"], ["c", "d"]].
        // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) devrait retourner [[0, 1, 2], [3, 4, 5]].
        // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) devrait retourner [[0, 1], [2, 3], [4, 5]].
        // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) devrait retourner [[0, 1, 2, 3], [4, 5]].
        // chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) devrait retourner [[0, 1, 2], [3, 4, 5], [6]].
        // chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) devrait retourner [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
        // chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) devrait retourner [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

        function chunkArrayInGroups(arr, size){
            /* let tableau1=[]; 
            let tableau=[];
            for (let index = 0; index < arr.length; index++) {
                tableau.push(arr[index])
                if(index==size*(index+1)){
                    console.log(size*(index+1));
                    tableau=[];
                }
            }  
            tableau1.push(tableau);
            return tableau1;  */
            let tableau=[];
            while(arr.length>0){
                tableau.push(arr.splice(0,size))
            }

            return tableau;
        }
        console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
        console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
        console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));


       /*  ## Exercice 14: Encodage Latin 
        Difficulté: Hard
        
        Créez une fonction latinPing(string).
        Cette fonction prend des chaîne de caractères, et
        retourne une version coder de cette dernière.
        Pour chaque mot constituant la phrase, on déplace
        le 1er caractère à la fin du mot, puis on ajoute "ay"
        
        NB: la ponctuation, n'est pas prise en compte (! ? .)
        
        ex: latinPing("hello!") devrait retourner "ellohay!"
        ex: latinPing("bonjour à tous!") devrait retourner "onjourbay àay tousay ! */

        function latinPing(string){
            let tab=[]
            tab.push(string.slice(1)+ 'ay')
            tab[string.length-2]=string.charAt(0)
            return tab.join('');
        }

        console.log(latinPing("hello!") );
 