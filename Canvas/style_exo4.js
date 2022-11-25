//EXERCICE 4

let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');
ctx.beginPath();
let square = {
    color: "#FF0000",
    length:80,
    x:10,
    y:10
};

    // FONCTION qui dessine le carré la première fois
        displaySquare();

        function displaySquare()
    {
        // On vide le Canvas avant de redessiner
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // On dit au contexte que la couleur de remplissage est gris
        ctx.fillStyle = '#DDDDDD';
        // On rempli le Canvas de gris
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // On dit au contexte que la couleur de remplissage est rouge
        ctx.fillStyle = square.color;

        // On trace un nouveau carré rempli (fill) avec cette couleur
        ctx.fillRect(square.x, square.y, square.length, square.length);
    }

    function moveSquare(e)
{
    // on détecte la touche et la direction puis on change les coordonnées
    switch(e.key)
    {
        case 'ArrowRight':
            if (square.x + square.length < canvasDom.width ) square.x++;
            break;
        case 'ArrowLeft':
            if (square.x > 0) square.x--;
            break;
        case 'ArrowUp':
            if (square.y > 0) square.y--;
            break;
        case 'ArrowDown':
            if (square.y + square.length < canvasDom.height) square.y++;
            break;
    }

    // On dessine notre carré 
    displaySquare();
}
