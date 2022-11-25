function foo() {
    let userEnter=document.getElementById("input_container_value").value;
    let result=eval(userEnter);
    document.getElementById("result_container").innerHTML=result;
}