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
  providers: [PhraseService]
})
export class HangmanCmp implements OnInit {
  title: string = "Hangman Game";
  phrase: string;

  constructor(private _phraseService: PhraseService){
    this.getPhrase();
  }

  ngOnInit(){
    this.getPhrase();
    console.log('init');
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
