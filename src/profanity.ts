import {dictionary} from "./dictionary/dictionary";

function clear(words: string[]): string[] {
    return words.map(word => word.replace(/[^a-zA-Z\u0621-\u064A]/g, ''));
}

export function badWords(input: string): string {
    const words: string[] = clear(input.split(' '));
    const badWords: string[] = dictionary;
    const censoredWords = words.map(word => {
        const isBad = badWords.indexOf(word.toLowerCase()) !== -1;
        return isBad ? '***' : word;
    });

    return censoredWords.join(' ');
}

export function isBadWords(...input: string[]): boolean {
    const words: string[] = clear(input.join(' ').split(' '));
    const badWords: string[] = dictionary;

    return words.some(word =>
        badWords.indexOf(word.toLowerCase()) !== -1
    )
}