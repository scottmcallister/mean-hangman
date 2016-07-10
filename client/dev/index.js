"use strict";
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var hangman_cmp_1 = require('./hangman/components/hangman-cmp');
platform_browser_dynamic_1.bootstrap(hangman_cmp_1.HangmanCmp, [
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]);
//# sourceMappingURL=index.js.map