//Class user 
class User{
    constructor(name, firstName, nameJob, age){
        this.nameJob=nameJob;
        this.name=name;
        this.firstName=firstName;
        this.age= new Age(age).getAge;    
    }
        
    fullname(name, firstName){
        this.name=name;
        this.firstName=firstName;
        console.log(this.name+" "+ this.firstName);
    }

    /**
     * @param {String} nameNewJob
     */

    //Acesseur set permettant de remplacer le job
    
    set job(nameNewJob){
        this.nameJob=nameNewJob;
    }
    // Accesseur get qui retourne l'actuel job
    get job(){
        return this.nameJob;
    }
}

 
class Admin extends User{
    
    canEditArticles(){
        return true;
    }
}

class Age{

    constructor(age){ 
        this.age=age;
    }

    get getAge(){
        return (this.age<0 || this.age>150 || typeof(this.age) ==='string')?null:this.age;
    }
}


let user1=new User("MEDENOU", "Marcos" , "developpeur" , "ghcdh");
console.log(user1.age)
// user1.age=new Age(22);
// let Admin1=new Admin("CODJO", "adjanou");
// user1.fullname("MEDENOU", "Marcos");
// Admin1.fullname("CODJO", "Marthin");
// console.log(Admin1.canEditArticles());
// console.log(user1);
// console.log(Admin1);
// Admin1.job="Developpeur fullstack"
// user1.job="Developpeur front-end";
// console.log(user1);
// console.log(Admin1);