class TodoList {
    constructor(element) {
        // élément représente la list non ordonnée
        this.listElement=element;
        this.textList= [];
    }
    static createListItem (text,element) {    
  // text représente le texte à insérer dans un <li>
            let li = document.createElement("li");
            li.innerText = text;
            li.style.listStyle='none'
            li.style.marginBlock='5px'
            li.style.fontSize='1.2em'
            li.style.width='700px'
            li.style.textAlign='initial'
            li.style.padding='15px'
            li.style.color='black'
            li.style.marginLeft='70px'
            li.style.border='2px solid black'
            li.style.borderRadius='10px'
            li.style.backgroundColor='Moccasin'
            let trash=document.createElement("span");
            trash.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>'
            let trashBlock=document.querySelectorAll('span')
            li.append(trash)
            element.appendChild(li)
            trash.addEventListener('click', function(){
                li.remove();  
            })
            let buttonDelete=document.getElementById('buttonDelete');
                buttonDelete.addEventListener('click', function(e,i){
                    e.preventDefault()
                    todoApp.textList.forEach((e,i)=>todoApp.remove(i))
                })
            return li
    }


    update() {
        // let allLi = document.querySelectorAll('li');
        // allLi.forEach(tagLi => tagLi.remove());
        
        TodoList.createListItem(this.text, this.listElement)
        // this.textList.forEach(el => {
        //     this.listElement.append(TodoList.createListItem(el));
        // })
      
    }

    add(text) {
        this.text=text
        this.textList.push(text)
        this.update()
    }


    remove(index) {
        console.log('appel de la méthode remove');
        let myNodelist = document.getElementsByTagName('li');
        for(let i=0; i< myNodelist.length; i++){
            if(i==index){
                if (myNodelist[i].parentNode) {
                    myNodelist[i].parentNode.removeChild(myNodelist[i]);
                }
            }
        }
    }
}
let inputBlock=document.getElementById('input')
let buttonAddTask=document.getElementById('button')
buttonAddTask.addEventListener('click',function(e){
    e.preventDefault();
    if(inputBlock.value!==''){
        todoApp.add(inputBlock.value);
        inputBlock.value=null
    }
} )

let svg=document.getElementsByTagName('svg')
let list=document.getElementById('block_tasks')
const todoApp = new TodoList(list)

var i = 0;
var txt = "Programmer une tache, c'est se mettre dans la tete qu'elle a été exécutée";
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;

    setTimeout(typeWriter, speed);
  }
}
typeWriter()