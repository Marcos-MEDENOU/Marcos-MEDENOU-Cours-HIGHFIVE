//au chargement de la page
window.onload = () => {
    //declaration de variables
    let ball = document.querySelector('#ball');
    let screenWidth = document.querySelector('body').clientWidth;
    let position = 0;
    let fps = 0;

    //on lance l'animation
    window.requestAnimationFrame(move);

    function move() {

        if (fps > screenWidth) {
            position -= .5;
            ball.style = `left : ${position}%;`;
            // console.log('retour: ', position);
            if (position == 0) {
                fps = 0;
            }
        } else {
            fps += 5
            position += .5;
            if (fps < screenWidth) {
                ball.style = `left :  ${position}%;`;
                // console.log("allée: ", position);
            }
        }
        //on relance l'animation (récursive)
        window.requestAnimationFrame(move);
    }

}