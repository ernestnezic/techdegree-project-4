/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game;

//Event listener that creates a new Game object and starts a game 
 document.getElementById('btn__reset').addEventListener('click', () => {
     game = new Game();
     game.startGame();
 });

//Listening for in game keyboard clicks and handeling that interaction
 document.getElementById('qwerty').addEventListener('click', (event) => {
    if ( event.target.className === 'key' || event.target.className === 'chosen' || event.target.className === 'wrong') {
        game.handleInteraction(event.target);
        console.log(event.target);
    }
 })

