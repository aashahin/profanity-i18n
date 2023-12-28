"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.add = exports.list = exports.contains = exports.filter = void 0;
var dictionary_1 = require("./dictionary/dictionary");
function clear(words) {
    return words.map(function (word) { return word.replace(/[^a-zA-Z\u0621-\u064A]/g, ''); });
}
function filter(input) {
    var words = clear(input.split(' '));
    var badWords = dictionary_1.dictionary;
    var censoredWords = words.map(function (word) {
        var isBad = badWords.indexOf(word.toLowerCase()) !== -1;
        return isBad ? '***' : word;
    });
    return censoredWords.join(' ');
}
exports.filter = filter;
function contains() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    var words = clear(input.join(' ').split(' '));
    var badWords = dictionary_1.dictionary;
    return words.some(function (word) {
        return badWords.indexOf(word.toLowerCase()) !== -1;
    });
}
exports.contains = contains;
function list(input) {
    var words = clear(input);
    var badWords = dictionary_1.dictionary;
    return words.filter(function (word) {
        return badWords.indexOf(word.toLowerCase()) !== -1;
    });
}
exports.list = list;
function add(input) {
    var words = clear(input);
    var badWords = dictionary_1.dictionary;
    words.forEach(function (word) {
        if (badWords.indexOf(word.toLowerCase()) === -1) {
            badWords.push(word.toLowerCase());
        }
    });
}
exports.add = add;
function remove(input) {
    var words = clear(input);
    var badWords = dictionary_1.dictionary;
    words.forEach(function (word) {
        var index = badWords.indexOf(word.toLowerCase());
        if (index !== -1) {
            badWords.splice(index, 1);
        }
    });
}
exports.remove = remove;
