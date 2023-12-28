import {dictionary} from "./dictionary/dictionary";

function clear(words: string[]): string[] {
    return words.map(word => word.replace(/[^a-zA-Z\u0621-\u064A]/g, ''));
}

export function filter(input: string): string {
    const words: string[] = clear(input.split(' '));
    const badWords: string[] = dictionary;
    const censoredWords = words.map(word => {
        const isBad = badWords.indexOf(word.toLowerCase()) !== -1;
        return isBad ? '***' : word;
    });

    return censoredWords.join(' ');
}

export function contains(...input: string[]): boolean {
    const words: string[] = clear(input.join(' ').split(' '));
    const badWords: string[] = dictionary;

    return words.some(word =>
        badWords.indexOf(word.toLowerCase()) !== -1
    )
}

export function list(input: string[]): string[] {
    const words: string[] = clear(input);
    const badWords: string[] = dictionary;

    return words.filter(word =>
        badWords.indexOf(word.toLowerCase()) !== -1
    )
}

export function add(input: string[]): void {
    const words: string[] = clear(input);
    const badWords: string[] = dictionary;

    words.forEach(word => {
        if (badWords.indexOf(word.toLowerCase()) === -1) {
            badWords.push(word.toLowerCase());
        }
    });
}

export function remove(input: string[]): void {
    const words: string[] = clear(input);
    const badWords: string[] = dictionary;

    words.forEach(word => {
        const index = badWords.indexOf(word.toLowerCase());
        if (index !== -1) {
            badWords.splice(index, 1);
        }
    });
}