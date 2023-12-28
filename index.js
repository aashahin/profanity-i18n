"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBadWords = void 0;
var dictionary_1 = require("./dictionary");
function clear(words) {
    return words.map(function (word) { return word.replace(/[^a-zA-Z\u0621-\u064A]/g, ''); });
}
function badWords(input) {
    var words = clear(input.split(' '));
    var badWords = dictionary_1.default;
    var censoredWords = words.map(function (word) {
        var isBad = badWords.indexOf(word.toLowerCase()) !== -1;
        return isBad ? '***' : word;
    });
    return censoredWords.join(' ');
}
function isBadWords() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    var words = clear(input.join(' ').split(' '));
    var badWords = dictionary_1.default;
    return words.some(function (word) {
        return badWords.indexOf(word.toLowerCase()) !== -1;
    });
}
exports.isBadWords = isBadWords;
console.log(isBadWords('test', 'sex'));
exports.default = badWords;
