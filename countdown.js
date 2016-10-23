const vowels = [['a', 15], ['e', 21], ['i', 13], ['o', 13], ['u', 5]];
const consonants = [
    ['b', 2], ['c', 3], ['d', 6], ['f', 2], ['g', 3], ['h', 2], ['j', 1], ['k', 1], ['l', 5], ['m', 4], ['n', 8],
    ['q', 1], ['r', 9], ['s', 9], ['t', 9], ['v', 1], ['w', 1], ['x', 1], ['y', 1], ['z', 1]
];

const vowelsArray = [];
const consonantsArray = [];

vowels.forEach(vowel => {
    for (let i = 0; i < vowel[1]; i++) {
        vowelsArray.push(vowel[0]);
    };
});

consonants.forEach(vowel => {
    for (let i = 0; i < vowel[1]; i++) {
        consonantsArray.push(vowel[0]);
    };
});

function getRandomConsonant() {
    const rand = Math.floor(Math.random() * 74);
    return consonantsArray[rand];
}

function getRandomVowel() {
    const rand = Math.floor(Math.random() * 67);
    return vowelsArray[rand];
}

new Vue({
    el: '#letter-board',
    data: {
        letters: []
    },
    methods: {
        reset: function () {
            this.letters = [];
        },
        add: function (type) {
            if (this.letters.length >= 9) {
                return;
            }
            switch (type) {
                case 'consonant':
                    this.letters.push(getRandomConsonant());
                    break;
                case 'vowel':
                    this.letters.push(getRandomVowel());
                    break;
                default:
                    console.error('Add type not supported:', type);
                    break;
            }
        }
    }
});