import { Component } from '@angular/core';
import 'rxjs/Rx'
import { PhraseService } from '../services/phrase-service';
import { BodyComponent } from './body-cmp';
import { PhraseComponent } from './phrase-cmp';
import { WrongGuessComponent } from './wrong-guess-cmp';

@Component({
  selector: 'hangman-cmp',
  templateUrl: 'hangman/templates/hangman.html',
  styleUrls: ['hangman/styles/hangman.css'],
  providers: [PhraseService],
  directives: [BodyComponent, PhraseComponent, WrongGuessComponent],
  host: { '(window:keydown)': 'onKey($event.keyCode)' }
})
export class HangmanCmp {
  phrase: string;
  gameStatus: string = "playing";
  lettersInPhrase: any[] = [];
  splitPhrase: any[] = [];
  numberWrong: number = 0;
  numberRight: number = 0;
  correctGuesses: any[] = [];
  wrongGuesses: any[] = [];

  constructor(private _phraseService: PhraseService){
    this.getPhrase();
  }

  onKey(keycode){
    if(this.isLetter(keycode) && this.gameStatus == "playing"){
      let letter = String.fromCharCode(keycode).toLowerCase();
      this.checkMatch(letter);
      this.checkGameStatus();
    }
  }

  isLetter(keycode: number) {
    // checks if pressed key is a letter
    return (keycode >= 65 && keycode <= 90);
  }

  checkMatch(letter: string){
    letter = letter.toLowerCase();
    if(this.lettersInPhrase.indexOf(letter) > -1){
      if(this.correctGuesses.indexOf(letter) < 0){
        this.correctGuesses.push(letter);
        this.numberRight++;
      }
    } else{
      if(this.wrongGuesses.indexOf(letter) < 0){
        this.wrongGuesses.push(letter);
        this.numberWrong++;
      }
    }
  }

  reset(){
    this.getPhrase();
    this.numberWrong = 0;
    this.numberRight = 0;
    this.correctGuesses = [];
    this.wrongGuesses = [];
    this.gameStatus = "playing";
  }

  checkGameStatus(){
    if(this.numberWrong === 6){
      this.gameStatus = "lost";
    }
    if(this.numberRight === this.lettersInPhrase.length){
      this.gameStatus = "won";
    }
  }

  showModal(){
    if(this.gameStatus === "playing"){
      this.gameStatus = "guessing";
      let modal = document.getElementById('guessModal');
      modal.style.display = "block";
      let guessInput = document.getElementById('guess-input');
      guessInput.focus();
    }
  }

  hideModal(event){
    let modal = document.getElementById('guessModal');
    let closeBtn = document.getElementsByClassName('close');
    if(event.target == modal || event.target == closeBtn){
      modal.style.display = "none";
      this.gameStatus = "playing";
    }
  }

  guessPhrase(event){
    event.preventDefault();
    let guess = (<HTMLInputElement>document.getElementById('guess-input')).value;
    if( guess.replace(/[^a-z0-9\s]/gi,'').toLowerCase() 
        === this.phrase.replace(/[^a-z0-9\s]/gi,'').toLowerCase()){
      this.gameStatus = "won";
    } else{
      this.gameStatus = "lost"
    }
    document.getElementById('guessModal').style.display = 'none';
  }

  private getPhrase(){
    this._phraseService
        .getRandom()
        .then(phrase =>{
          this.phrase = phrase;
          this.lettersInPhrase =
            phrase.replace(/[^a-z0-9]/gi,'')
                  .toLowerCase()
                  .split('')
                  .filter((value, index, self) => {
                     return self.indexOf(value) === index;
                   });
          let wordsInPhrase = phrase.split(' ');
          this.splitPhrase = [];
          wordsInPhrase.forEach(word => {
            this.splitPhrase.push(word.split(''));
          });
        },
        error => console.log(error));
  }
}
