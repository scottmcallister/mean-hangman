import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'guess-cmp',
  templateUrl: 'hangman/templates/guesses.html'
})
export class WrongGuessComponent {
  @Input() wrongGuesses: any[] = [];
  @Input() gameStatus: string = "playing";
  constructor(){}
}
