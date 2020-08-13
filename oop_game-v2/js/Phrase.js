/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

    
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.firstElementChild;

        for ( let i = 0; i < this.phrase.length; i++) {
            const letter = document.createElement('li');
            letter.innerHTML = this.phrase[i]

            if (letter.innerHTML === ' ') {
                letter.className = 'space'
            } else {
                letter.className = `hide letter ${this.phrase[i]}`
            }

            phraseUl.appendChild(letter);
        }
    }

    
    /**
     * Checks if passes letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {

        let letterContained = false;

        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === letter) {
                letterContained = true;
            }
        }

        return letterContained;
    }


    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        
        const letterLiCollection = document.getElementById('phrase').firstElementChild;
        
        for ( let i = 0; i < letterLiCollection.childElementCount; i++) {
            
            const currentLi = letterLiCollection.children[i];

            if (currentLi.innerHTML === letter ) {
                currentLi.className = `show letter ${letter}`;
            }
        }
    }
 }