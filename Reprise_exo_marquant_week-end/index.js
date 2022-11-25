function WinnerPoints(tab) {
   let tabSplit= tab.join(':').split(':')
   let tab1=[];
   let tab2=[];
   for (let index = 0; index < tabSplit.length; index+=2) {
        tab1.push(Number(tabSplit[index]))
   }
   for (let index = 1; index < tabSplit.length; index+=2) {
    tab2.push(Number(tabSplit[index]))
    }

    let point=0;
    tab1.filter(function(element, index) {
        if(element>tab2[index]){
            point+=3;
        }else if(element<tab2[index]){
            point+=1;
        }else if(element===tab2[index]){
            point+=0;
        }
    });
    return point;
}

console.log(WinnerPoints(["0:4", "2:1", "0:1", "1:1", "1:1","1:1", "1:1", "1:1","1:1", "1:1"]))