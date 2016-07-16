import {
  Component
} from '@angular/core';
import 'rxjs/Rx'
import { PhraseService } from '../services/phrase-service';
import { BodyComponent } from './body-cmp';
import { WordComponent } from './word-cmp';
import { WrongGuessComponent } from './wrong-guess-cmp';

@Component({
  selector: 'hangman-cmp',
  templateUrl: 'hangman/templates/hangman.html',
  styleUrls: ['hangman/styles/hangman.css'],
  providers: [PhraseService],
  directives: [BodyComponent, WordComponent, WrongGuessComponent],
  host: { '(window:keydown)': 'onKey($event.keyCode)' }
})
export class HangmanCmp {
  phrase: string;
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
    if(this.isLetter(keycode)){
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
  }

  checkGameStatus(){
    if(this.numberWrong === 6){
      alert("game over!");
      this.reset();
    }
  }

  private getPhrase(){
    this._phraseService
        .getRandom()
        .then(phrase =>{
          this.phrase = phrase.replace(/[/']/g, '');
          this.lettersInPhrase = phrase.replace(/[^a-z0-9]/gi,'').split('');
          let wordsInPhrase = phrase.replace(/[^a-z0-9\s]/gi,'').split(' ');
          this.splitPhrase = [];
          wordsInPhrase.forEach(word => {
            this.splitPhrase.push(word.split(''));
          });
          console.log(this.splitPhrase);
        },
        error => console.log(error));
    //return "test";
  }
}
