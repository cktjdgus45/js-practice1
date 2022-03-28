const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolElement = document.getElementById('includeSymbols');
const passwordDisplay = document.getElementById('passwordDisplay');

characterAmountRange.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);


const LOWERCASE_CHAR_CODES = arrayFromHighToLow(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromHighToLow(65, 90);
const NUMBER_CHAR_CODES = arrayFromHighToLow(48, 57);
const SYMBOL_CHAR_CODES = arrayFromHighToLow(33, 47)
    .concat(arrayFromHighToLow(58, 64))
    .concat(arrayFromHighToLow(91, 96))
    .concat(arrayFromHighToLow(123, 126))

form.addEventListener('submit', e => {
    e.preventDefault();
    const charaterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolElement.checked;
    const password = generatePassword(charaterAmount, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.innerText = password;
})

function generatePassword(charaterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    const passwordCharacters = [];
    for (let i = 0; i < charaterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join(',');
}

function arrayFromHighToLow(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}