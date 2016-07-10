import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'hangman-cmp',
  templateUrl: 'hangman/templates/hangman.html',
  styleUrls: ['hangman/styles/hangman.css']
  //providers: [HangmanService]
})
export class HangmanCmp implements OnInit {
  title: string = "Hangman";
  phrase: string = '';

  constructor(){
  }

  ngOnInit(){
    console.log('init');
  }
}
