import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'wrong-guess-cmp',
  templateUrl: 'hangman/templates/wrong-guess.html'
})
export class WrongGuessComponent {
  @Input() wrongGuesses: any[] = [];
  constructor(){}
}
