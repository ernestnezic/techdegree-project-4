/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game;


 document.getElementById('btn__reset').addEventListener('click', () => {
     game = new Game();
     game.startGame();
 });

 document.getElementById('qwerty').addEventListener('click', (event) => {

    if ( event.target.className === 'key' || event.target.className === 'chosen' || event.target.className === 'wrong') {
        game.handleInteraction(event.target);
        console.log(event.target);
    }
 })

