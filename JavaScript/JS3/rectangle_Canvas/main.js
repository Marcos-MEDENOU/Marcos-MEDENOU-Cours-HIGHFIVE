//use strict pour indiquer au  navigateur que les propriétés ou mots clé de declaration
//des variables pourraient  etre d'origine ECMAScript5
'use strict';

document.addEventListener('DOMContentLoaded', function(){
    let canvas=document.getElementById('canvas');
    let ctx= canvas.getContext('2d');
    ctx.fillStyle="green";
    ctx.fillRect(50,50,200,200);

    ctx.fillStyle="yellow";
    ctx.fillRect(250,50,200,100);

    ctx.fillStyle="red";
    ctx.fillRect(250,150,200,100);

    ctx.beginPath();
    ctx.arc(250,370,90,0,Math.PI*2)
    ctx.fillStyle="orange";
    ctx.fill();
    
})