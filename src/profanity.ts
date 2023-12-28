import {dictionary} from "./dictionary/dictionary";

function clear(words: string[]): string[] {
    return words.map(word => word.replace(/[^a-zA-Z\u0621-\u064A]/g, ''));
}

/**
 * @param input
 * @description
 * Filter bad words from a string
 * @returns {string}
 * @example
 * profanity.filter('This is a bad word');
 * //=> 'This is a *** word'
 */
export function filter(input: string): string {
    const words: string[] = clear(input.split(' '));
    const badWords: string[] = dictionary;
    const censoredWords = words.map(word => {
        const isBad = badWords.indexOf(word.toLowerCase()) !== -1;
        return isBad ? '***' : word;
    });

    return censoredWords.join(' ');
}

/**
 * @description
 * Check if a string contains bad words
 * @returns {boolean}
 * @example
 * profanity.contains('This is a bad word');
 * //=> true
 */
export function contains(...input: string[]): boolean {
    const words: string[] = clear(input.join(' ').split(' '));
    const badWords: string[] = dictionary;

    return words.some(word =>
        badWords.indexOf(word.toLowerCase()) !== -1
    )
}


/**
 * @description
 * List bad words in a string
 * @returns {string[]}
 * @example
 * profanity.list('This is a bad word');
 * //=> ['bad']
 */
export function list(input: string[]): string[] {
    const words: string[] = clear(input);
    const badWords: string[] = dictionary;

    return words.filter(word =>
        badWords.indexOf(word.toLowerCase()) !== -1
    )
}


/**
 * @description
 * Add bad words to the dictionary
 * @example
 * profanity.add(['bad', 'words']);
 */
export function add(input: string[]): void {
    const words: string[] = clear(input);
    const badWords: string[] = dictionary;

    words.forEach(word => {
        if (badWords.indexOf(word.toLowerCase()) === -1) {
            badWords.push(word.toLowerCase());
        }
    });
}

/**
 * @description
 * Remove bad words from the dictionary
 * @example
 * profanity.remove(['bad', 'words']);
 */
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