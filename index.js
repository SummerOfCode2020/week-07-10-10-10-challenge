/*
@Challenge 01 - Write a function named 'toNumber' that takes a number string and converts it to a regular number.
@Example - Sending the function a value of '2' would return 2.
@Test - Write a console.log that shows the result of 'toNumber('4')'
*/
toNumber = (n) => parseInt(n)

console.log(toNumber('4'))
/*
@Challenge 02 - Write a function named 'priceTotal' that uses the .reduce() method to subtract numbers in an array.
@Example - Sending [100, 50, 20] through the function should return 30.
@Test - Make a function call of 'priceTotal()'
*/
function difference(acc, n) {
    return acc - n
}
priceTotal = (items) => items.reduce(difference)
console.log(priceTotal([100, 50, 20]))

/*
@Challenge 03 - Write a function called 'happyHour' that has an array of numbers from 16 to 25 and filter out all the number from 21 and up.
@Example - When sent through the function 21, 22, 23, 24 and 25 should be the only numbers returning.
@Test - Make a function call of 'happyHour()'
*/
happyHour = () => {
    const number = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    return number.filter(nums => {
        return nums >= 21
    })
}
console.log(happyHour())
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
breakTheNest = person => '"' + person.name.firstName + ' drives a ' + person.car.year + ' ' + person.car.make + ' ' + person.car.model + '"'
console.log(breakTheNest(person))
/*
@Challenge 05 - Write a function called 'reverseErase' that takes an array of words, and takes a word and returns the new word without including the first character.
@Example - ['Apple', 'Cinnamon', 'Acorn', 'Bread'] should return as: ['pple', 'innamon', 'corn', 'ead']
@Test - Make a function call of 'reverseErase()'
*/
reverseErase = words => words.map(word => word.substr(1))
console.log(reverseErase(['Apple', 'Cinnamon', 'Acorn', 'Bread']))
/*
@Challenge 06 - Write a function called 'characterSelect' that has an array of characters and you are tasked with having two players select their character.
@Example - you should get something like: Player one chose Mr Maximus, Player two chose Dr Doof.
@Test Make a function call of 'characterSelect()'

*/
characterSelect = () => {
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
    let p1 = 0
    let p2 = 0
    while (p1 === p2) {
        p1 = Math.floor(Math.random() * Math.floor(3))
        p2 = Math.floor(Math.random() * Math.floor(3))
    }
    let str = 'Player one chose ' + player[p1].character.name +
        ', Player two chose ' + player[p2].character.name + '.'
    return str
}
console.log(characterSelect())
/*
@Challenge 07 - Write a function called 'Mathmatical' where two numbers are passed as parameters. The first parameter divided by
the second parameter will have a remainder, possibly zero. Return that value.
@Example - mathmatical(6,3) should return 2.
@Test - Make a function call of 'Mathmatical()'
*/
Mathmatical = (num1, num2) => num1 / num2
console.log(Mathmatical(6, 12))
/*
@Challenge 08 - Write a function called 'theSwitcherroo' that can reverse an array.
@Example - [1,2,3] would return as [3,2,1]
@Test - Make a function call of 'theSwitcherroo()'
*/
theSwithcherroo = forward => forward.reverse()
console.log(theSwithcherroo([1, 2, 3, 4, 5]))
/*
@Challenge 09 - Write a function called 'totalDestruction' that has an array of numbers and your goal is to removes any
odd numbers but lets you know if there are only even numbers it will return a message letting the user know.
@Example - [20,35,73,82,51,94,103], the only numbers that would come back should be 20,82,94. When given [20,30,40]
a message should appear in the terminal saying something like: "No odd numbers detected"
@Test - Make a function call of 'totalDestruction()'
*/
totalDestruction = numlist => {
    let str = ''
    let retVal = numlist.filter(num => !(num % 2))
    const retVal2 = numlist.filter(num => num % 2)
    if (retVal2.length < 1) { retVal = "no odd numbers detected" }
    return retVal
}
//console.log(totalDestruction([20, 35, 73, 82, 51, 94, 103]))
console.log(totalDestruction([20, 30, 40]))
/*
@Challenge 10 - Write a function called 'heightRequirement' that checks the height of children who are trying to rida a Rollercoaster.
In order to ride the child must be 7 years or older and be over 4ft tall.
@Example - Using the given array show which children would be able to ride the rollercoaster.
@Test - Make a function calle of 'heightRequirement()'.
*/
heightRequirement = databank => databank.filter(data => data.age >= 7 && data.height >= 4)
console.log(heightRequirement([{
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
}]))