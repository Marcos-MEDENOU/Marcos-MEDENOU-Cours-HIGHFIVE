'use strict'

document.addEventListener('DOMContentLoaded', function(){

    // On initialise notre jeu
    // let game1=new game()
    // game1.initGame();
    
    // On dessine notre jeu

    // new game().displayGame();

    // On lance notre jeu
    // new paddle().playGame();
})

class ball{
    constructor(color="#FF0000", radius=10,x=100,y=100){
        this.color= color,
        this.radius=radius,
        this.x=x,
        this.y=y
    }
};

class paddle{
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

class game{
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