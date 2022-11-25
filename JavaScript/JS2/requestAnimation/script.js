 
  //let bodyHeight=document.querySelector('#body').clientHeight;
  let directionY=1;
  let directionX=1;

  let positionX=0;
  let positionY=0;

  let directionYY=1;
  let directionXX=1;

  let positionXX=0;
  let positionYY=0;

  let ball = document.getElementById("myBall");
  let ball2 = document.getElementById("myBall2");
  let limitBottom = window.innerHeight-ball.clientHeight;
  let limitWidth=window.innerWidth-ball.clientWidth;

document.addEventListener('DOMContentLoaded', function(){
  window.requestAnimationFrame(move);

  function move(){
    window.requestAnimationFrame(move);
          positionY+= 5*directionY;
          positionX+= 5*directionX;

          positionYY+= 2*directionYY;
          positionXX+= 2*directionXX;
          // ball.style=`left:${positionX}px`;
          ball.style=`top:${positionY}px;left:${positionX}px`;
          ball2.style=`top:${positionYY}px;bottom:${positionXX}px`;
          if(positionY <= 0 || positionY>=limitBottom ){
            directionY *= -1;
          } 
          if(positionYY <= 0 || positionYY>=limitBottom ){
            directionYY *= -1;
          } 
          if(positionX <= 0 || positionX>=limitWidth ){
            directionX *= -1;
          }

          if(positionXX <= 0 || positionXX>=limitWidth ){
            directionXX *= -1;
          }
        }

})
