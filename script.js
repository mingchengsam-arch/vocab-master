// JavaScript logic for the vocab learning app

// Sample vocabulary list
const vocabList = [
    { word: 'abate', meaning: 'to lessen in intensity or degree' },
    { word: 'benevolent', meaning: 'well-meaning and kindly' },
    { word: 'candid', meaning: 'truthful and straightforward' },
    { word: 'diligent', meaning: 'showing care and effort in one’s work or duties' }
];

// Function to display vocabulary
function displayVocab() {
    vocabList.forEach(vocab => {
        console.log(`Word: ${vocab.word} - Meaning: ${vocab.meaning}`);
    });
}

// Function to lookup a word
function lookupWord(word) {
    const result = vocabList.find(vocab => vocab.word === word);
    if (result) {
        console.log(`Meaning of ${word}: ${result.meaning}`);
    } else {
        console.log(`Word ${word} not found in vocabulary.`);
    }
}

// Example usage
displayVocab();
lookupWord('abate');