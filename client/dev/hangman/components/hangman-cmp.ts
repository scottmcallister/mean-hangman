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
  numberWrong: number = 0;
  numberRight: number = 0;
  correctGuesses: any[] = [];
  wrongGuesses: any[] = [];

  constructor(private _phraseService: PhraseService){
    this.getPhrase();
  }

  ngOnInit(){
    this.getPhrase();
    console.log('init');
  }

  onKey(keycode){
    if(this.isLetter(keycode)){
      let letter = String.fromCharCode(keycode).toLowerCase();
      console.log('key pressed: '+ letter);
    }
  }

  isLetter(keycode: number) {
    // checks if pressed key is a letter
    return (keycode >= 65 && keycode <= 90);
  }

  private getPhrase(){
    this._phraseService
        .getRandom()
        .then(phrase =>
          this.phrase = phrase,
          error => console.log(error));
    //return "test";
  }
}
