import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'phrase-cmp',
  templateUrl: 'hangman/templates/phrase.html'
})
export class PhraseComponent {
  @Input() lettersInPhrase: any[] = [];
  @Input() correctGuesses: any[] = [];
  @Input() splitPhrase: any[] = [];
  constructor(){}

  isCorrectGuess(letter: string): boolean{
    return (this.correctGuesses.indexOf(letter.toUpperCase()) > -1
            || this.correctGuesses.indexOf(letter.toLowerCase()) > -1);
  }

  isSpace(letter: string): boolean{
    return letter === " ";
  }

  isAlphanumeric(letter: string): boolean{
    let alphaNumeric = /^[a-z0-9]/i;
    return alphaNumeric.test(letter);
  }

}
