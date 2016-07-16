import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'word-cmp',
  templateUrl: 'hangman/templates/word.html'
})
export class WordComponent {
  @Input() lettersInPhrase: any[] = [];
  @Input() correctGuesses: any[] = [];
  @Input() splitPhrase: any[] = [];
  constructor(){}
  isCorrectGuess(letter: string): boolean{
    let upperLetter = letter.toUpperCase;
    return (this.correctGuesses.indexOf(letter) > -1
            || this.correctGuesses.indexOf(upperLetter) > -1);
  }
  isSpace(letter: string): boolean{
    return letter === " ";
  }
}
