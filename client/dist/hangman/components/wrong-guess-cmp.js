"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var a,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(s=(n<3?a(s):n>3?a(t,o,s):a(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),WrongGuessComponent=function(){function e(){this.wrongGuesses=[],this.gameStatus="playing"}return __decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"wrongGuesses",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"gameStatus",void 0),e=__decorate([core_1.Component({selector:"guess-cmp",templateUrl:"hangman/templates/guesses.html"}),__metadata("design:paramtypes",[])],e)}();exports.WrongGuessComponent=WrongGuessComponent;