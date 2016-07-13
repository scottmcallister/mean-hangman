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
require('rxjs/Rx');
var phrase_service_1 = require('../services/phrase-service');
var HangmanCmp = (function () {
    function HangmanCmp(_phraseService) {
        this._phraseService = _phraseService;
        this.lettersInPhrase = [];
        this.numberWrong = 0;
        this.numberRight = 0;
        this.correctGuesses = [];
        this.wrongGuesses = [];
        this.getPhrase();
    }
    HangmanCmp.prototype.ngOnInit = function () {
    };
    HangmanCmp.prototype.onKey = function (keycode) {
        if (this.isLetter(keycode)) {
            var letter = String.fromCharCode(keycode).toLowerCase();
            this.checkMatch(letter);
        }
    };
    HangmanCmp.prototype.isLetter = function (keycode) {
        return (keycode >= 65 && keycode <= 90);
    };
    HangmanCmp.prototype.checkMatch = function (letter) {
        if (this.lettersInPhrase.indexOf(letter) > -1) {
            if (this.correctGuesses.indexOf(letter) < 0) {
                this.correctGuesses.push(letter);
                this.numberRight++;
            }
        }
        else {
            if (this.wrongGuesses.indexOf(letter) < 0) {
                this.wrongGuesses.push(letter);
                this.numberWrong++;
            }
        }
    };
    HangmanCmp.prototype.getPhrase = function () {
        var _this = this;
        this._phraseService
            .getRandom()
            .then(function (phrase) {
            _this.phrase = phrase.replace(/[/']/g, '');
            _this.lettersInPhrase = phrase.replace(/[^a-z0-9]/gi, '').split('');
        }, function (error) { return console.log(error); });
    };
    HangmanCmp = __decorate([
        core_1.Component({
            selector: 'hangman-cmp',
            templateUrl: 'hangman/templates/hangman.html',
            styleUrls: ['hangman/styles/hangman.css'],
            providers: [phrase_service_1.PhraseService],
            host: { '(window:keydown)': 'onKey($event.keyCode)' }
        }), 
        __metadata('design:paramtypes', [phrase_service_1.PhraseService])
    ], HangmanCmp);
    return HangmanCmp;
}());
exports.HangmanCmp = HangmanCmp;
//# sourceMappingURL=hangman-cmp.js.map