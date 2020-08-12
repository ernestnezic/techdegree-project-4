/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     
    constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }


     /**
      * Creates phrases for use in game
      * @return {array} An array of phrases that could be used in the game
      */
     createPhrases() {
        let phrasesArray = [];

        phrasesArray.push(new Phrase('Down and out'));
        phrasesArray.push(new Phrase('Let her rip'));
        phrasesArray.push(new Phrase('Jumping the gun'));
        phrasesArray.push(new Phrase('Lovey Dovey'));
        phrasesArray.push(new Phrase('My cup of tea'));

        return phrasesArray;
     }


     /**
      * Selects random phrase from phrases property
      * @return {Object} Phrase object chosen to be used
      */
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
     }


     /**
      * Begins game by selecting a random phrase and displaying it to user
      */
     startGame() {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
     }
 }