import dictionary from "./dictionary";

function clear(words: string[]): string[] {
    return words.map(word => word.replace(/[^a-zA-Z\u0621-\u064A]/g, ''));
}

function badWords(input: string): string {
    const words: string[] = clear(input.split(' '));
    const badWords: string[] = dictionary;
    const censoredWords = words.map(word => {
        const isBad = badWords.indexOf(word.toLowerCase()) !== -1;
        return isBad ? '***' : word;
    });

    return censoredWords.join(' ');
}

export default badWords;