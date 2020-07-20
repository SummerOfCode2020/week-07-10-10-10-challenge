/*
@Challenge 01 - Write a function named 'toNumber' that takes a number string and converts it to a regular number.
@Example - Sending the function a value of '2' would return 2.
@Test - Write a console.log that shows the result of 'toNumber('4')'
*/


function toNumber(string) {
    return parseInt(string)
}
console.log(toNumber('4'))
console.assert(toNumber('4') === 4, "Expected 4")



/*
@Challenge 02 - Write a function named 'priceTotal' that uses the .reduce() method to subtract numbers in an array.
@Example - Sending [100, 50, 20] through the function should return 30.
@Test - Make a function call of 'priceTotal()'
*/
function priceTotal(numArray) {
    return numArray.reduce((acc, currentVal) => acc - currentVal)
}

console.log(priceTotal([100, 50, 20]))
console.assert(priceTotal([100, 50, 20]) === 30, "Expected 30")
/*
@Challenge 03 - Write a function called 'happyHour' that has an array of numbers from 16 to 25 and filter out all the number from 21 and up.
@Example - When sent through the function 21, 22, 23, 24 and 25 should be the only numbers returning.
@Test - Make a function call of 'happyHour()'
*/
function happyHour(ageArray) {
    return ageArray.filter(currentAge => currentAge >= 21)
}

let ages16to25 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

console.log(happyHour(ages16to25))
console.assert(JSON.stringify(happyHour(ages16to25), JSON.stringify([21, 22, 23, 24, 25])), "Expected 21-25 only")
/*
@Challenge 04 - Write a function called 'breakTheNest' that has a nested object like the one shown, your goal is to show only the firstName and everything within "car" in a sentence.
@Example - Your terminal should return something along the lines of "John drives a 2019 Ford Explorer"
@Test - Make a function call of 'breakTheNest()'
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

function breakTheNest(object) {
    const {
        make,
        model,
        year
    } = object.car
    return `${object.name.firstName} drives a ${year} ${make} ${model}`
}
console.log(breakTheNest(person))
console.assert(breakTheNest(person) === 'John drives a 2019 Ford Explorer', 'Expected John drives a 2019 Ford Explorer')
/*
@Challenge 05 - Write a function called 'reverseErase' that takes an array of words, and takes a word and returns the new word without including the first character.
@Example - ['Apple', 'Cinnamon', 'Acorn', 'Bread'] should return as: ['pple', 'innamon', 'corn', 'ead']
@Test - Make a function call of 'reverseErase()'
*/

function reverseErase(array) {
    return array.map(word => word.substring(1))
}
wordArray = ['Apple', 'Cinnamon', 'Acorn', 'Bread']
console.log(reverseErase(wordArray))
console.assert(JSON.stringify(reverseErase(wordArray)) === JSON.stringify(['pple', 'innamon', 'corn', 'read']), "Was expecting ['pple', 'innamon', 'corn', 'read'] ")

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
}]

function characterSelect(playerArray) {
    [player1, player2, ...rest] = playerArray
    return `Player one chose ${player1.character.name}, Player two chose ${player2.character.name}.`
}
console.log(characterSelect(player))
console.assert(characterSelect(player) === 'Player one chose Mr Maximus, Player two chose Dr Doof.')
/*

@Challenge 07 - Write a function called 'Mathmatical' where two numbers are passed as parameters. The first parameter divided by 
the second parameter will have a remainder, possibly zero. Return that value.
@Example - mathmatical(6,3) should return 2.
@Test - Make a function call of 'Mathmatical()'
*/

function mathmatical(num1, num2) {
    return num1 / num2
}
console.log(mathmatical(6, 3))
console.assert(mathmatical(6, 3) === 2, 'Expected 2')

/*
@Challenge 08 - Write a function called 'theSwitcherroo' that can reverse an array.
@Example - [1,2,3] would return as [3,2,1]
@Test - Make a function call of 'theSwitcherroo()'
*/
function theSwitcherroo(array) {
    return array.reverse()
}
console.log(theSwitcherroo([1, 2, 3]))
console.assert(JSON.stringify(theSwitcherroo([1, 2, 3])) === JSON.stringify([3, 2, 1]), "Expected [3,2,1]")
/*
@Challenge 09 - Write a function called 'totalDestruction' that has an array of numbers and your goal is to removes any 
odd numbers but lets you know if there are only even numbers it will return a message letting the user know.
@Example - [20,35,73,82,51,94,103], the only numbers that would come back should be 20,82,94. When given [20,30,40]
a message should appear in the terminal saying something like: "No odd numbers detected"
@Test - Make a function call of 'totalDestruction()'
*/
function totalDestruction(numberArray) {
    let oddsRemoved = numberArray.filter(number => number % 2 === 0)

    if (JSON.stringify(oddsRemoved) === JSON.stringify(numberArray)) {
        return 'No odd numbers detected'
    }
    return oddsRemoved
}

console.log(totalDestruction([20, 35, 73, 82, 51, 94, 103]))
console.assert(JSON.stringify(totalDestruction([20, 35, 73, 82, 51, 94, 103])) === JSON.stringify([20, 82, 94]), "Expected [20,82,94]")

console.log(totalDestruction([20, 30, 40]))
console.assert(totalDestruction([20, 30, 40]) === 'No odd numbers detected', "Expected 'No odd numbers detected'")

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
    let newArray = children.filter(function (child) {
        return child.age >= 7 && child.height >= 4
    })

    return newArray
}

console.log(heightRequirement(children))
console.assert(JSON.stringify(heightRequirement(children)) === JSON.stringify([{
    age: 8,
    height: 4.1
}, {
    age: 10,
    height: 4.5
}]), "Expected  { age: 8, height: 4.1 }, { age: 10, height: 4.5 } ]")