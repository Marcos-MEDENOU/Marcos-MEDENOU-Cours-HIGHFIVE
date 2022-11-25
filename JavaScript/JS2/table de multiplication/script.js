// let multiplicator=Number(window.prompt("Taper le multiplicateur"));
// let stopTable=Number(window.prompt("Taper l'index d'arret"));
// let compter=0;
// while(compter<=stopTable){
//     foo(compter);
//     // document.write(multiplicator+"*"+compter +" = "+eval(compter*multiplicator)  +"<br>");
//     compter++;
// }

// function table(compt){
//     document.write(multiplicator+"+ "+compt +" = "+eval(compt+multiplicator)  +"<br>");
//     document.write(multiplicator+"- "+compt+" = "+ eval(-compt+multiplicator) +"<br>");

// }
// document.write("<br>");
// let compter2=0
// while(compter2<=stopTable){
//     // let result=multiplicator+"* "+compter+" = "+ compter*multiplicator;
//     document.write(multiplicator+"+ "+compter2 +" = "+eval(compter2+multiplicator)  +"<br>");
//     compter2++;
// }

// document.write("<br>");
// let compter3=0
// while(compter3<=stopTable){
//     // let result=multiplicator+"* "+compter+" = "+ compter*multiplicator;
//     document.write(multiplicator+"- "+compter3+" = "+ eval(-compter3+multiplicator) +"<br>");
//     compter3++;
// }

// document.write("<br>");

// let compter4=0;
// while(compter4<=stopTable){
//     // let result=multiplicator+"* "+compter+" = "+ compter*multiplicator;
//     let result=compter4/multiplicator;
//     document.write(multiplicator+"/ "+compter4+" = "+ eval(result) +"<br>");
//     compter4++;
// }
    
function inputControls(message){
    let input;
    do{
        input=window.prompt(message);
    }while(input=="" || isNaN(Number(input)))

    return Number(input);
}
function calculator(multiplicator,indexFin,operator){
    let result=[];
    for(let i=0; i<=indexFin;i++){
        switch(operator){
            case "*": result.push(multiplicator+"*"+i+"="+multiplicator*i);
            break;
            case "-":  result.push(multiplicator+"-"+i+"="+multiplicator-i);
                break;
            case "+":  result.push(multiplicator+"+"+i+"="+multiplicator+i);
                break;
            case "/": 
            if(i===0){
                i++;
            }
            result.push(multiplicator+"/"+i+"="+multiplicator/i);
            break;
        }
    }
    return result;
}
number1=inputControls("Taper le mulplicant");
number2=inputControls("Taper l'index de fin");

if(number1 && number2){
    let multiplication=calculator(number1,number2,'*');
    let soustraction=calculator(number1,number2,'-');
    let addition=calculator(number1,number2,'+');
    let division=calculator(number1,number2,'/');

    multiplication.forEach(element => {
        document.write(element);
    });

    soustraction.forEach(element => {
        document.write(element);
    });

    addition.forEach(element => {
        document.write(element);
    });

    division.forEach(element => {
        document.write(element);
    });
    
}


