export class Request {
    
    constructor(input){
        //stocker les deux inputs injecter a l'instanciaton de la class Request dans une variable
       this.input="";
        for(let i=0; i<input.length; i++){
            if(!(input[i].value==="submit" || input[i].value==="Reset")){
                this.input+=input[i].value + '\n';
            } 
        }
    }
    getInputs(){
        console.log(this.input);
    }
}