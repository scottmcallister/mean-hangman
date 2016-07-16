"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PhraseComponent = (function () {
    function PhraseComponent() {
        this.lettersInPhrase = [];
        this.correctGuesses = [];
        this.splitPhrase = [];
    }
    PhraseComponent.prototype.isCorrectGuess = function (letter) {
        return (this.correctGuesses.indexOf(letter.toUpperCase()) > -1
            || this.correctGuesses.indexOf(letter.toLowerCase()) > -1);
    };
    PhraseComponent.prototype.isSpace = function (letter) {
        return letter === " ";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PhraseComponent.prototype, "lettersInPhrase", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PhraseComponent.prototype, "correctGuesses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PhraseComponent.prototype, "splitPhrase", void 0);
    PhraseComponent = __decorate([
        core_1.Component({
            selector: 'phrase-cmp',
            templateUrl: 'hangman/templates/phrase.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PhraseComponent);
    return PhraseComponent;
}());
exports.PhraseComponent = PhraseComponent;
//# sourceMappingURL=phrase-cmp.js.map