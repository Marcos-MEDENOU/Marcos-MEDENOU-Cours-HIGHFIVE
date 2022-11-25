// number1=Number(window.prompt("Taper le premier nombre"));
// operator=window.prompt("Taper l'opérateur");
// number2=Number(window.prompt("Taper le deuxieme nombre"));
do{
    number1=Number(window.prompt("Taper le premier nombre"));
    operator=window.prompt("Taper l'opérateur");
    number2=Number(window.prompt("Taper le deuxieme nombre"));
} while(isNaN(number1) || isNaN(number2));

// if((number2===0) && (operator==='/')){
//     result="<br> Vous essayez de diviser un nombre par 0, ce qui est impossible"
//     document.write(result);
// }

if(!isNaN(number1) && !isNaN(number2)){
    if((number2===0) && (operator==='/')){
        document.write("error, vous essayer de diviser un nombre par 0");
    }else
        switch(operator){
        case "+":
            result=number1+number2;
            document.write(result);
            break;

        case "-":
            result=number1-number2;
            document.write(result);
            break;
        case "*":
            result=number1*number2;
            document.write(result);
            break;
        case "/":
            result=number1/number2;
            document.write(result);
            break;
        default:
            document.write("Vous n'avez pas taper un ou plusieurs elements demander")
        }
    }
  
    // try{
    //     if(isNaN(number1)) throw "<br> La premiere valeur que vous avez taper n'est pas un nombre entier";
    //     if(isNaN(number2)) throw "<br>  La deuxieme valeur que vous avez taper n'est pas un nombre entier";
    // }catch(e){
    //     document.write(e);
    // }

    // try{
    //     if((number2===0) && (operator==='/'))  throw "<br> Vous esssayer de diviser un nombre par 0, ce qui est impossible" ;
    // }catch(e){
    //     document.write(e);
    // }
