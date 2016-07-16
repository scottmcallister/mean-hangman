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
var body_cmp_1 = require('./body-cmp');
var word_cmp_1 = require('./word-cmp');
var wrong_guess_cmp_1 = require('./wrong-guess-cmp');
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
    HangmanCmp.prototype.onKey = function (keycode) {
        if (this.isLetter(keycode)) {
            var letter = String.fromCharCode(keycode).toLowerCase();
            this.checkMatch(letter);
            this.checkGameStatus();
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
    HangmanCmp.prototype.reset = function () {
        this.getPhrase();
        this.numberWrong = 0;
        this.numberRight = 0;
        this.correctGuesses = [];
        this.wrongGuesses = [];
    };
    HangmanCmp.prototype.checkGameStatus = function () {
        if (this.numberWrong === 6) {
            alert("game over!");
            this.reset();
        }
    };
    HangmanCmp.prototype.getPhrase = function () {
        var _this = this;
        this._phraseService
            .getRandom()
            .then(function (phrase) {
            _this.phrase = phrase.replace(/[/']/g, '');
            var wordsInPhrase = phrase.replace(/[^a-z0-9\s]/gi, '').split(' ');
            wordsInPhrase.forEach(function (word) {
                _this.lettersInPhrase.push(word.split(''));
            });
            console.log(_this.lettersInPhrase);
        }, function (error) { return console.log(error); });
    };
    HangmanCmp = __decorate([
        core_1.Component({
            selector: 'hangman-cmp',
            templateUrl: 'hangman/templates/hangman.html',
            styleUrls: ['hangman/styles/hangman.css'],
            providers: [phrase_service_1.PhraseService],
            directives: [body_cmp_1.BodyComponent, word_cmp_1.WordComponent, wrong_guess_cmp_1.WrongGuessComponent],
            host: { '(window:keydown)': 'onKey($event.keyCode)' }
        }), 
        __metadata('design:paramtypes', [phrase_service_1.PhraseService])
    ], HangmanCmp);
    return HangmanCmp;
}());
exports.HangmanCmp = HangmanCmp;
//# sourceMappingURL=hangman-cmp.js.map