import {ball} from './ball.js'
import {paddle} from './paddle.js'
import {game} from './game.js'
export class game{
    constructor(background='#DDDDDD', width=800, height=600, direction=-1,speed=5, animationId=null, canvasDom=null, ctx=null){
        this.background=background,
        this.width=width,
        this.height=height,
        this.direction=direction,
        this.speed=speed,
        this.animationId=animationId,
        this.canvasDom=canvasDom,
        this.ctx=ctx
        /** Gestionnaire des évènement du clavier
         * @param {event} e l'évènement keydow
         * 
         */
        this.keyboardEvent=new paddle().keyboardEvent();
    }

    initGame(){
        // L'objet du DOM Canvas
        game.canvasDom = document.querySelector('#canvas');

        // On définie la largeur et hauteur de notre Canvas ici plutôt qu'en dur dans le HTML
        game.canvasDom.width = game.width;
        game.canvasDom.height = game.height;

        // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
        game.ctx = game.canvasDom.getContext('2d');

        /** On initialise les évènement du clavier */
        document.addEventListener('keydown',game.keyboardEvent);
        document.addEventListener('keyup', game.keyboardEvent);
    }
    
    displayGame() {
        // On vide le Canvas avant de redessiner
        game.ctx.clearRect(0, 0, game.canvasDom.width, game.canvasDom.height);
    
        /** Fond de la zone de jeu */
        game.ctx.fillStyle = game.background;
        game.ctx.fillRect(0, 0, game.canvasDom.width, game.canvasDom.height);
    
        /** Dessin du plateau */
        game.ctx.fillStyle = paddle.color;
        game.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    
        /** Dessin de la balle */
        game.ctx.fillStyle = ball.color;
        game.ctx.beginPath();
        game.ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        game.ctx.fill();
    }
    
}