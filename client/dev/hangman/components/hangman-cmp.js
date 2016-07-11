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
        this.title = "Hangman";
        this.getPhrase();
    }
    HangmanCmp.prototype.ngOnInit = function () {
        this.getPhrase();
        console.log('init');
    };
    HangmanCmp.prototype.getPhrase = function () {
        var _this = this;
        this._phraseService
            .getRandom()
            .then(function (phrase) {
            return _this.phrase = phrase;
        }, function (error) { return console.log(error); });
    };
    HangmanCmp = __decorate([
        core_1.Component({
            selector: 'hangman-cmp',
            templateUrl: 'hangman/templates/hangman.html',
            styleUrls: ['hangman/styles/hangman.css'],
            providers: [phrase_service_1.PhraseService]
        }), 
        __metadata('design:paramtypes', [phrase_service_1.PhraseService])
    ], HangmanCmp);
    return HangmanCmp;
}());
exports.HangmanCmp = HangmanCmp;
//# sourceMappingURL=hangman-cmp.js.map