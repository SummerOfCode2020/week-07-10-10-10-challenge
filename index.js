/*
@Challenge 01 - Write a function named 'toNumber' that takes a number string and converts it to a regular number.
@Example - Sending the function a value of '2' would return 2.
@Test - Write a console.log that shows the result of 'toNumber('4')'
*/

function toNumber(value) {
    return parseFloat(value)
}

console.log(toNumber('2'))
console.log(toNumber('54.65'))

toNumberAlt = (value) => {
    return parseFloat(value)
}

console.log(toNumberAlt('43.54'))

/*
@Challenge 02 - Write a function named 'priceTotal' that uses the .reduce() method to subtract numbers in an array.
@Example - Sending [100, 50, 20] through the function should return 30.
@Test - Make a function call of 'priceTotal()'
*/

function priceTotal(numbers) {
    const subtractedNumbersResult = numbers.reduce(function subtract(accumulator, currentNumber) {
        return accumulator - currentNumber
    })

    return subtractedNumbersResult
}

console.log(priceTotal([100, 50, 20]))
console.log(priceTotal([150, 70, 10]))

priceTotalAlt = (numbers) => {
    const subtractedNumbersResult = numbers.reduce(function subtract(accumulator, currentNumber) {
        return accumulator - currentNumber
    })
    return subtractedNumbersResult
}

console.log(priceTotalAlt([20, 8, 2]))

/*
@Challenge 03 - Write a function called 'happyHour' that has an array of numbers from 16 to 25 and filter out all the number from 21 and up.
@Example - When sent through the function 21, 22, 23, 24 and 25 should be the only numbers returning.
@Test - Make a function call of 'happyHour()'
*/

function happyHour(arrayOfNumbers) {
    const numbers21AndUp = arrayOfNumbers.filter(function checkNumber(currentNumber) {
        return currentNumber >= 21
    })
    return numbers21AndUp
}

console.log(happyHour([16, 17, 18, 19, 20, 21, 22, 23, 24, 25]))

happyHourAlt = (arrayOfNumbers) => {
    const numbers21AndUp = arrayOfNumbers.filter(function checkNumber(currentNumber) {
        return currentNumber >= 21
    })
    return numbers21AndUp
}

console.log(happyHour([16, 17, 18, 19, 20, 21, 22, 23, 24, 25]))

/*
@Challenge 04 - Write a function called 'breakTheNest' that has a nested object like the one shown, your goal is to show only the firstName and everything within "car" in a sentence.
@Example - Your terminal should return something along the lines of "John drives a 2019 Ford Explorer"
@Test - Make a function call of 'breakTheNest()'
let person = {
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
    car: {
        make: 'Ford',
        model: 'Explorer'
        year: 2019
    }
}
*/
let person = {
    name: {
        firstName: 'John',
        lastName: 'Doe'
    },
    car: {
        make: 'Ford',
        model: 'Explorer',
        year: 2019
    }
}
function breakTheNest(nestedObject) {
    const { firstName } = nestedObject.name
    const { make, model, year } = nestedObject.car
    return firstName + ' drives a ' + year + ' ' + make + ' ' + model + '.'
}

console.log(breakTheNest(person))

breakTheNestAlt = (nestedObject) => {
    const { firstName } = nestedObject.name
    const { make, model, year } = nestedObject.car
    return firstName + ' drives a ' + year + ' ' + make + ' ' + model + '.'
}

console.log(breakTheNestAlt(person))

/*
@Challenge 05 - Write a function called 'reverseErase' that takes an array of words, and takes a word and returns the new word without including the first character.
@Example -  should return as: ['pple', 'innamon', 'corn', 'ead']
@Test - Make a function call of 'reverseErase()'
*/

function reverseErase(arrayOfWords) {
    const chacterRemoval = arrayOfWords.map(function firstLetterExtracted(word) {
        return word.slice(1)
    })

    return chacterRemoval
}

console.log(reverseErase(['Apple', 'Cinnamon', 'Acorn', 'Bread']))

reverseEraseAlt = (arrayOfWords) => {
    const characterRemoval = arrayOfWords.map(function FirstLetterExtracted(word) {
        return word.slice(1)
    })

    return characterRemoval
}

console.log(reverseEraseAlt(['Apple', 'Cinnamon', 'Acorn', 'Bread']))

/*
@Challenge 06 - Write a function called 'characterSelect' that has an array of characters and you are tasked with having two players select their character.
@Example - you should get something like: Player one chose Mr Maximus, Player two chose Dr Doof.
@Test Make a function call of 'characterSelect()'
*/
let player = [{
    character: {
        name: 'Mr Maximus',
        power: 'Psychic abilities'
    }
}, {
    character: {
        name: 'Dr Doof',
        power: 'Mediocore tech skills'
    }
}, {
    character: {
        name: 'Mad Margret',
        power: 'Super strength'
    }
}
]

function characterSelect(characterPossibilities) {
    let player1Selection = ' '
    let player2Selection = ' '
    let player3Selection = ' '
    for (let superHero of characterPossibilities) {
        //const { name } = superHero.character
        switch (superHero.character.name) {
            case 'Mr Maximus':
                player1Selection = 'Mr Maximus'
                break
            case 'Dr Doof':
                player2Selection = 'Dr Doof'
                break
            case 'Mad Margret':
                player3Selection = 'Mad Margret'
                break
            default:
                return 'No character was selected'
        }
    }
    return 'Player 1 chose ' + player1Selection + ', Player 2 chose ' + player2Selection + ', and Player 3 chose ' + player3Selection + '.'
}

console.log(characterSelect(player))

/*
@Challenge 07 - Write a function called 'Mathmatical' where two numbers are passed as parameters. The first parameter divided by
the second parameter will have a remainder, possibly zero. Return that value.
@Example - mathmatical(6,3) should return 2.
@Test - Make a function call of 'Mathmatical()'
*/

// Should the example above be 'mathematical(6,4) should return 2.' because (6,3)'s remainder is 0. Not sure if I have the right function.
function mathematical(number1, number2) {
    return number1 % number2
}

console.log(mathematical(6, 4))

/*
@Challenge 08 - Write a function called 'theSwitcherroo' that can reverse an array.
@Example - [1,2,3] would return as [3,2,1]
@Test - Make a function call of 'theSwitcherroo()'
*/

function theSwitcherroo(arrayToBeReversed) {
    let reversedArray = []
    for (let i = arrayToBeReversed.length - 1; i >= 0; i--) {
        reversedArray.push(arrayToBeReversed[i])
    }
    return reversedArray
}

const exampleArray = [1, 2, 3]
console.log(theSwitcherroo(exampleArray))

/*
@Challenge 09 - Write a function called 'totalDestruction' that has an array of numbers and your goal is to removes any
odd numbers but lets you know if there are only even numbers it will return a message letting the user know.
@Example - [20,35,73,82,51,94,103], the only numbers that would come back should be 20,82,94. When given [20,30,40]
a message should appear in the terminal saying something like: "No odd numbers detected"
@Test - Make a function call of 'totalDestruction()'
*/

/* 
So happy I was able to figure this out! First, I checked each array for odd numbers and set that to
an oddNumberCount. Then, either performed the filter function or returned no odd numbers detected based
on the pressence of an odd number in the array. Woohoo!
*/
function totalDestruction(arrayNumbers) {
    let oddNumberCount = 0
    arrayNumbers.forEach(arrayNumber => {
        if (arrayNumber % 2 === 1) {
            oddNumberCount++
            console.log(oddNumberCount)
        }
    })

    if (oddNumberCount > 0) {
        onlyEvenValues = arrayNumbers.filter(function checkForEvens(value) {
            return (value % 2 === 0)
        })

        return onlyEvenValues
    } else {

        return 'No odd numbers detected'
    }
}

console.log(totalDestruction([20, 35, 73, 82, 51, 94, 103]))
console.log(totalDestruction([40, 20, 80]))
/*
@Challenge 10 - Write a function called 'heightRequirement' that checks the height of children who are trying to rida a Rollercoaster.
In order to ride the child must be 7 years or older and be over 4ft tall.
@Example - Using the given array show which children would be able to ride the rollercoaster.
@Test - Make a function calle of 'heightRequirement()'.
*/
let children = [{
    age: 8,
    height: 4.1
}, {
    age: 10,
    height: 4.5
}, {
    age: 5,
    height: 3.5
}, {
    age: 7,
    height: 3.8
}]

function heightRequirement(children) {
    canRideRollercoaster = []
    for (const child of children) {
        if (child.age >= 7 && child.height > 4)
            canRideRollercoaster.push(child)
    }
    return canRideRollercoaster
}

console.log(heightRequirement(children))