import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {enableProdMode} from '@angular/core';

//import {TodoCmp} from './todo/components/todo-cmp';
import {HangmanCmp} from './hangman/components/hangman-cmp';

enableProdMode();
bootstrap(HangmanCmp, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);
