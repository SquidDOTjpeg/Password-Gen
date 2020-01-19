var form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const includeUpperCaseElement = document.getElementById('useUpperCase')
const includeNumbersElement = document.getElementById('useNumbers')
const includeSymbolsElement = document.getElementById('useSymbols')
const characterAmountElement = document.getElementById('charNumber')



document.getElementById('passwordGeneratorForm').addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountElement.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
    passwordDisplay.innertext = password
})

const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 112)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
    arrayFromLowtoHigh(58, 64)
    ).concat(
    arrayFromLowtoHigh(91, 96)
    ).concat(
    arrayFromLowtoHigh(123, 126)
    )

function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUpperCase) {
    let charCodes = LOWERCASE_CHAR_CODES
    if(includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low, high) {
    const array = []
    for (var i = low; i <= high; i++) {
        array.push(i)
    }
    return array 
}

