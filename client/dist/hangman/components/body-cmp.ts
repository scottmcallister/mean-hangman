import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'body-cmp',
  templateUrl: 'hangman/templates/body.html'
})
export class BodyComponent {
  @Input() numberWrong: number = 0;
  constructor(){}
}
