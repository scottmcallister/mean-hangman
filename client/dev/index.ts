import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

//import {TodoCmp} from './todo/components/todo-cmp';
import {HangmanCmp} from './hangman/components/hangman-cmp';

bootstrap(HangmanCmp, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);
