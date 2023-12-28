# profanity-i18n
A simple profanity filter for multiple languages

![npm](https://img.shields.io/npm/v/profanity-i18n?style=flat-square)


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the package.

```bash
npm install profanity-i18n
```

## Usage

```typescript
import profanity from 'profanity-i18n';

// Filter a string
profanity.filter('هذه جملة فيها كلمات سيئة'); // هذه جملة فيها كلمات ***
profanity,filter('This is a string with bad words'); // This is a string with *** words

// Check if contains profanity
profanity.contains('هذه', 'جملة', 'فيها', 'كلمات', 'سيئة'); // true
profanity.contains('This', 'is', 'a', 'string', 'with', 'bad', 'words'); // true

// Get a list of bad words
profanity.list(['هذه', 'جملة', 'فيها', 'كلمات', 'سيئة']); // ['هذه', 'جملة', 'فيها', 'كلمات', 'سيئة']
profanity.list(['This', 'is', 'a', 'string', 'with', 'bad', 'words']); // ['bad', 'words']

// Add a word to the list
profanity.add(['هذه', 'جملة', 'فيها', 'كلمات', 'سيئة'], 'كلمة'); // ['هذه', 'جملة', 'فيها', 'كلمات', 'سيئة', 'كلمة']
profanity.add(['This', 'is', 'a', 'string', 'with', 'bad', 'words'], 'word'); // ['This', 'is', 'a', 'string', 'with', 'bad', 'words', 'word']

// Remove a word from the list
profanity.remove(['هذه', 'جملة', 'فيها', 'كلمات', 'سيئة'], 'كلمة'); // ['هذه', 'جملة', 'فيها', 'كلمات', 'سيئة']
profanity.remove(['This', 'is', 'a', 'string', 'with', 'bad', 'words'], 'word'); // ['This', 'is', 'a', 'string', 'with', 'bad', 'words']
```

## Supported Languages
- English
- Arabic

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://opensource.org/license/MIT)
