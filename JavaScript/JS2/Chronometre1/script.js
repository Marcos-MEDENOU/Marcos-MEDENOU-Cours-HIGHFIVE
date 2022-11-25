let buttonStart=document.querySelector('.start');
let buttonReset=document.querySelector('#reset');
let buttonStop=document.querySelector('.stop');
let chronoScreen=document.querySelector('#chrono');
let saveTimer=document.getElementById('save')
let saveBlock=document.getElementById('saveTime')
console.log(buttonReset)

//variables qui stocke l'heur
let hours=0;
//variable qui stocke en temps réel la  minute
let minutes=0;
//variable qui stocke les secondes
let secondes=0; 
//variable qui permet de controller le timer
let miliSeconds=0;

let intervalHours=0;
let interMinutes=0;
let interSecondes=0;
let interMiliSeconds=0;

function setMilliseconds(){
    if(miliSeconds==999){
        miliSeconds=0;
    }else{
        miliSeconds++;
    }
    document.getElementById('MS').innerText=miliSeconds
}

function setSecondes(){
    if(secondes==59){
        secondes=0
    }else{
        secondes++;
    }
    document.getElementById('S').innerText=secondes+" :"
    if(secondes<=9){
        document.getElementById('S').innerText='0'+secondes+" :"
    }
}


function setMinutes(){
    if(minutes==59){
        minutes=0;
    }else{
        minutes++;
    }
    document.getElementById('M').innerText=minutes+" :";
    if(minutes<=9){
        document.getElementById('M').innerText='0'+minutes+" :"
    }
}

function setHours(){
    if(hours==23){
        hours=0;
    }else{
        hours++;
    }
    document.getElementById('H').innerText=hours+" :"
}

function start(){
    interMiliSeconds=setInterval(setMilliseconds,1);
    interSecondes=setInterval(setSecondes,1000);
    interMinutes=setInterval( setMinutes,60000);
    intervalHours=setInterval( setHours, 3600000)
}

function stop(){
    clearInterval(interMiliSeconds);
    clearInterval(interSecondes);
    clearInterval(interMinutes);
    clearInterval(intervalHours);
    
}

function reset(){
    stop();
    hours=0;
    minutes=0;
    secondes=0;
    miliSeconds=0;
    document.getElementById('H').innerText=hours+'0:';
    document.getElementById('MS').innerText=miliSeconds+'0';
    document.getElementById('M').innerText=minutes+'0:';
    document.getElementById('S').innerText=secondes+'0:';
}

let compter=0;
buttonStart.addEventListener('click', function(){
    switch(compter){
        case 0: 
            start();
            compter++;
            buttonStart.textContent="STOP";
            this.style.backgroundColor='green';
            break;
        case 1:
            this.style.backgroundColor='yellow';
            this.style.color="black"
            stop();
            buttonStart.textContent="STOP";
            buttonStart.textContent="START";
            compter--;
            break;
    }
});
buttonReset.addEventListener('click', reset);
buttonStop.addEventListener('click', stop);

saveTimer.addEventListener('click', function(){
    saveBlock.innerHTML+='0'+hours+':'+'0'+minutes+':'+ secondes+':'+miliSeconds+'<br>';
    if(minutes<=9){
        document.getElementById('M').innerText='0'+minutes+" :"
    }

    if(secondes<=9){
        document.getElementById('S').innerText='0'+secondes+" :"
    }
})