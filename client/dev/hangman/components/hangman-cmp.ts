import {
  Component,
  OnInit
} from '@angular/core';
import 'rxjs/Rx'
import { PhraseService } from '../services/phrase-service';

@Component({
  selector: 'hangman-cmp',
  templateUrl: 'hangman/templates/hangman.html',
  styleUrls: ['hangman/styles/hangman.css'],
  providers: [PhraseService],
  host: { '(window:keydown)': 'onKey($event.keyCode)' }
})
export class HangmanCmp implements OnInit {
  title: string = "Hangman Game";
  phrase: string;
  lettersInPhrase: any[] = [];
  numberWrong: number = 0;
  numberRight: number = 0;
  correctGuesses: any[] = [];
  wrongGuesses: any[] = [];

  constructor(private _phraseService: PhraseService){

  }

  ngOnInit(){
    this.getPhrase();
  }

  onKey(keycode){
    if(this.isLetter(keycode)){
      let letter = String.fromCharCode(keycode).toLowerCase();
      this.checkMatch(letter);
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

  private getPhrase(){
    this._phraseService
        .getRandom()
        .then(phrase =>{
          this.phrase = phrase;
          this.lettersInPhrase = phrase.split('')},
          error => console.log(error));
    //return "test";
  }
}
