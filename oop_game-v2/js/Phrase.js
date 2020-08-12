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
 }