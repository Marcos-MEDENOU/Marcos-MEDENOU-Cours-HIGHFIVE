import {ball} from './ball.js'
import {paddle} from './paddle.js'
import {game} from './game.js'
// On défini le propriété de notre plateau dans un objet
export class paddle{
    constructor(color="#000000", width=100, height=20,x=350,y=500,direction=0,speed=10){
        this.color=color,
        this.width=width,
        this.height=height,
        this.x=x,
        this.y=y,
        this.direction=direction,
        this.speed=direction
    }

    playGame() {

        // on modifie la position du plateau en fonction de sa direction et on le repositionne si il sort de la zone
        paddle.x += paddle.speed * paddle.direction;
        if (paddle.x + paddle.width > game.canvasDom.width)
            paddle.x = game.canvasDom.width - paddle.width;
        if (paddle.x < 0)
            paddle.x = 0;
    
        // Si la balle arrive en haut ou en bas on inverse la direction
        if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= game.canvasDom.height)
            game.direction *= -1;
    
        // on modifie la position y de la balle
        ball.y += game.speed * game.direction;
    
        // On redessine notre jeu
        
        new game().displayGame();
    
        // On demande à JS de relancer cette fonction à chaque rafraichissement de l'écran
        game.animationId = new game()
        game.animationId.requestAnimationFrame(playGame);
    }

    set keyboardEvent(e)
    {
        // on détecte la touche et la direction puis on change les coordonnées du plateau
        switch (e.key) {
            case 'ArrowRight':
                if (e.type == 'keydown')
                    paddle.direction = 1;
                else
                    paddle.direction = 0;
                break;
            case 'ArrowLeft':
                if (e.type == 'keydown')
                    paddle.direction = -1;
                else
                    paddle.direction = 0;
                break;
        }
    }
    
};