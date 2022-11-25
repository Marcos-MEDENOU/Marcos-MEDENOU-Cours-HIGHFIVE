function countLetter (str){
   let strSplit=str.replace(/ /gi, '').split('');
    let obj={};
    strSplit.forEach(element => {
        if(element in obj){
            obj[element]= obj[element] + 1
        }else{
            obj[element]=1;
        }
    });
        let tab1=Object.values(obj);
        let tab2=Object.keys(obj);
        let k=tab1.indexOf(1)
        console.log(tab1);
        console.log(tab2);
        console.log(k);
        return tab2[k];  
}
console.log(countLetter("marcos marco marco marco"));
// ['m','a','r','c','o','s','m','a','r','c','o','s','m','a','r','c','o','s','m','a','r','c','o','s']

// obje = {
//     "m":1,
//     "a":1,
//     "r":1,
//     "c":1,
//     "o":1,
//     "s":1
// }