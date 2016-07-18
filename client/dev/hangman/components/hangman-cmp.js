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
var phrase_cmp_1 = require('./phrase-cmp');
var wrong_guess_cmp_1 = require('./wrong-guess-cmp');
var HangmanCmp = (function () {
    function HangmanCmp(_phraseService) {
        this._phraseService = _phraseService;
        this.gameStatus = "playing";
        this.lettersInPhrase = [];
        this.splitPhrase = [];
        this.numberWrong = 0;
        this.numberRight = 0;
        this.correctGuesses = [];
        this.wrongGuesses = [];
        this.getPhrase();
    }
    HangmanCmp.prototype.onKey = function (keycode) {
        if (this.isLetter(keycode) && this.gameStatus == "playing") {
            var letter = String.fromCharCode(keycode).toLowerCase();
            this.checkMatch(letter);
            this.checkGameStatus();
        }
    };
    HangmanCmp.prototype.isLetter = function (keycode) {
        return (keycode >= 65 && keycode <= 90);
    };
    HangmanCmp.prototype.checkMatch = function (letter) {
        letter = letter.toLowerCase();
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
        this.gameStatus = "playing";
    };
    HangmanCmp.prototype.checkGameStatus = function () {
        if (this.numberWrong === 6) {
            this.gameStatus = "lost";
        }
        if (this.numberRight === this.lettersInPhrase.length) {
            this.gameStatus = "won";
        }
    };
    HangmanCmp.prototype.showModal = function () {
        if (this.gameStatus === "playing") {
            this.gameStatus = "guessing";
            var modal = document.getElementById('guessModal');
            modal.style.display = "block";
            var guessInput = document.getElementById('guess-input');
            guessInput.focus();
        }
    };
    HangmanCmp.prototype.hideModal = function (event) {
        var modal = document.getElementById('guessModal');
        var closeBtn = document.getElementsByClassName('close');
        if (event.target == modal || event.target == closeBtn) {
            modal.style.display = "none";
            this.gameStatus = "playing";
        }
    };
    HangmanCmp.prototype.guessPhrase = function (event) {
        event.preventDefault();
        var guess = document.getElementById('guess-input').value;
        if (guess.replace(/[^a-z0-9\s]/gi, '').toLowerCase()
            === this.phrase.replace(/[^a-z0-9\s]/gi, '').toLowerCase()) {
            this.gameStatus = "won";
        }
        else {
            this.gameStatus = "lost";
        }
        document.getElementById('guessModal').style.display = 'none';
    };
    HangmanCmp.prototype.getPhrase = function () {
        var _this = this;
        this._phraseService
            .getRandom()
            .then(function (phrase) {
            _this.phrase = phrase;
            _this.lettersInPhrase =
                phrase.replace(/[^a-z0-9]/gi, '')
                    .toLowerCase()
                    .split('')
                    .filter(function (value, index, self) {
                    return self.indexOf(value) === index;
                });
            var wordsInPhrase = phrase.split(' ');
            _this.splitPhrase = [];
            wordsInPhrase.forEach(function (word) {
                _this.splitPhrase.push(word.split(''));
            });
        }, function (error) { return console.log(error); });
    };
    HangmanCmp = __decorate([
        core_1.Component({
            selector: 'hangman-cmp',
            templateUrl: 'hangman/templates/hangman.html',
            styleUrls: ['hangman/styles/hangman.css'],
            providers: [phrase_service_1.PhraseService],
            directives: [body_cmp_1.BodyComponent, phrase_cmp_1.PhraseComponent, wrong_guess_cmp_1.WrongGuessComponent],
            host: { '(window:keydown)': 'onKey($event.keyCode)' }
        }), 
        __metadata('design:paramtypes', [phrase_service_1.PhraseService])
    ], HangmanCmp);
    return HangmanCmp;
}());
exports.HangmanCmp = HangmanCmp;
//# sourceMappingURL=hangman-cmp.js.map