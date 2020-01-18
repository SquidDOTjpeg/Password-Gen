const form = document.getElementById('generatorForm')

const includeUpperCaseElement = document.getElementById('useUpperCase')
const includeNumbersElement = document.getElementById('useNumbers')
const includeSymbolsElement = document.getElementById('useSymbols')
const characterAmountElement = document.getElementById('charNumber')



form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountElement.value
    const includeUpperCase = includeUpperCase.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)

})

const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 112)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47)
    .concat(
        arrayFromLowtoHigh(58, 64)
            .concat(
                arrayFromLowtoHigh(91, 96)
                    .concat(
                        arrayFromLowtoHigh(123, 126)
                    )
            )
    )

function generatePassword(characterAmount, includeNumbers, includeSymbols, characterAmount) {

}

function arrayFromLowtoHigh(low, high) {
    const array = []
    for (var i = 0; i <= high; i++) {
        array.push(i)
    }
}