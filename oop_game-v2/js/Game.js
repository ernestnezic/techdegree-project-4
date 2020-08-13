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


     /**
      * Checks for winning move
      * @return {boolean} True if game has been won, false if game wasn't won
      */
     checkForWin() {

        let gameWon = true;
        const letterLiCollection = document.getElementById('phrase').firstElementChild;

        for ( let i = 0; i < letterLiCollection.childElementCount; i++) {
            if ( letterLiCollection.children[i].className.includes('hide')) {
                gameWon = false;
            }
        }

        return gameWon;
     }


     /**
      * Increases the value of the missed property
      * Removes a life from the scoreboard
      * Checks if player has remaining lives and ends game if player is out
      */
     removeLife() {

        const scoreboardDiv = document.getElementById('scoreboard');
        const scoreboardOl = scoreboardDiv.firstElementChild;
        const scoreboardLiCollection = scoreboardOl.children;

        let changingImage = null;

        if (this.missed < 4) {
            scoreboardLiCollection[this.missed].firstElementChild.src = 'images/lostHeart.png'
            this.missed++;
        } else {
            this.gameOver(false);
        }
     }


     /**
      * Displays game over message
      * @param {boolean} gameWon - Whether or not the user won the game
      */
     gameOver(gameWon) {
       
        const gameWonH1 = document.getElementById('game-over-message');
        const overlayDiv = gameWonH1.parentNode;
        overlayDiv.style.display = 'block';
       
        if (gameWon) {
            gameWonH1.innerHTML = 'Congrats! You won! :) ';
            overlayDiv.className = 'win';
        } else {
            gameWonH1.innerHTML = 'Game over! Better luck next time! :( ';
            overlayDiv.className = 'lose';
        }

        this.resetGame();
     }


     /**
      * Handles onscreen keyboard button clicks
      * @param (HTMLButtonElement) button - The clicked button element
      */
     handleInteraction(button) {
        const keyRowDivs = document.getElementsByClassName('keyrow');
        let keyArray = [];

        for ( let i = 0; i < keyRowDivs.length; i++) {
            const keyRow = keyRowDivs[i];
            for (let j = 0; j < keyRow.childElementCount; j++) {
                keyArray.push(keyRow.children[j]);
            }
        }

        keyArray.forEach( key => {
            if ( key.innerHTML === button.innerHTML) {
                if (this.activePhrase.checkLetter(button.innerHTML)) {
                    key.disabled = true;
                    key.className = 'chosen';
                    this.activePhrase.showMatchedLetter(key.innerHTML);
                    if (this.checkForWin()) {
                        this.gameOver(true);
                    }
                } else {
                    key.disabled = true;
                    key.className = 'wrong';
                    this.removeLife();
                }
            }
        });
    }


    /**
     * Resets game including removing previous letters, enabling and reseting the keyboard and reseting plaer's lives
     */
    resetGame() {
        document.getElementById('phrase').firstElementChild.innerHTML = '';
        
        const keyElements = document.querySelectorAll('#qwerty button');   
        for (let i = 0; i < keyElements.length; i++) {
            keyElements[i].className = 'key';
            keyElements[i].disabled = false;
        }

        const lifeImages = document.getElementsByTagName('img');
        for (let i = 0; i < lifeImages.length; i++) {
            lifeImages[i].src = 'images/liveHeart.png'
        }
       
    }
 }