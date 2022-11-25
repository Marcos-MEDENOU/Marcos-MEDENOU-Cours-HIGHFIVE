let chronoScreen=document.querySelector('#chrono');
let chronoSeconds=document.querySelector('counter-seconds');
let chronoSeconds2=document.querySelector('counter-seconds1');
let starButton=document.querySelector('.start');
let resetButton=document.querySelector('.reset');
//Premier exercice
let seconds=0;
compter=0;

//1secondes avant l'execution des instructons a l'intérieur du setInterval
setInterval(() => {  
    document.getElementById('counter-seconds').innerText=compter;
    compter++;
}, 1000);


//Deuxieme exercice
let seconds2=0;
let minutes=0;
setInterval(() => {  
    seconds2++;
    if(seconds2==60){
        seconds2=0;
        minutes++;
    }
    document.getElementById('counter-seconds1').innerText='0'+minutes +' minute(s) '+' : '+seconds2+' seconde(s)';
}, 1000);

//Troisieme exercice
let tierce=0;
let seconds3=0;
let minutes3=0;
starButton.addEventListener('click', function(){
    starButton.classList.remove('start')
    starButton.classList.add('stop')
    setInterval(() => {
        tierce=tierce++;
        if(tierce==90){
            tierce=0;
            seconds3++;
            if(seconds3==60){
                seconds3=0;
                minutes3++;
            }
        }
        document.getElementById('counter-seconds2').innerText= '0'+minutes3+':' +'0'+seconds3+':'+tierce;
    }, 1000);
})

resetButton=addEventListener('click', function(){
    tierce=0;
    seconds3=0;
    minutes3=0;
    document.getElementById('counter-seconds2').textContent="00:00:00";
    
})