/*
@Challenge 01 - Write a function named 'toNumber' that takes a number string and converts it to a regular number.
@Example - Sending the function a value of '2' would return 2.
@Test - Write a console.log that shows the result of 'toNumber('4')'
*/

function toNumber(numString) {
    return parseInt(numString)
}
console.log('_1_ toNumber')
console.log(toNumber('4'))

/*
@Challenge 02 - Write a function named 'priceTotal' that uses the .reduce() method to subtract numbers in an array.
@Example - Sending [100, 50, 20] through the function should return 30.
@Test - Make a function call of 'priceTotal()'
*/

function priceTotal(arr) {
    return arr.reduce(function(item, num) {
        return item - num
    })
}
console.log('_2_ priceTotal')
console.log(priceTotal([100, 50, 20]))
/*
@Challenge 03 - Write a function called 'happyHour' that has an array of numbers from 16 to 25 and filter out all the number from 21 and up.
@Example - When sent through the function 21, 22, 23, 24 and 25 should be the only numbers returning.
@Test - Make a function call of 'happyHour()'
*/
function happyHour(arr) {
    return arr.filter(function(age){
        return age >= 21
    })
}

console.log('_3_ happyHour')
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
function breakTheNest( objPerson ) {
    let firstName = ''
    let make = ''
    let model = ''
    let year = ''
    for (let key in objPerson) {
        const value = objPerson[key]
        const valueDataType = typeof value
        if (valueDataType === 'object') {
            for (let nestedKey in value) {
                if (key === 'car') {
                    if (nestedKey === 'make') {
                        make = value[nestedKey]
                    } else if (nestedKey === 'year') {
                        year = value[nestedKey]
                    } else if (nestedKey === 'model') {
                        model = value[nestedKey]
                    }
                } else {key === 'name'} {
                    if ( nestedKey === 'firstName') {
                        firstName = value[nestedKey]
                    }
                }
            }
        } 
    }
    console.log(firstName + ' drives a ' + year + ' ' + make + ' ' + model)
}
console.log('_4_ breakTheNest')
console.log(breakTheNest(person))
/*
@Challenge 05 - Write a function called 'reverseErase' that takes an array of words, and takes a word and returns the new word without including the first character.
@Example - ['Apple', 'Cinnamon', 'Acorn', 'Bread'] should return as: ['pple', 'innamon', 'corn', 'ead']
@Test - Make a function call of 'reverseErase()'
*/
function reverseErase(arr) {
    return arr.map( function (item) {
        return item.substr(1, item.length - 1)
    })
}
console.log('_5_ reverseErase')
console.log(reverseErase(['Apple', 'Cinnamon', 'Acorn', 'Bread']))
/*
@Challenge 06 - Write a function called 'characterSelect' that has an array of characters and you are tasked with having two players select their character.
@Example - you should get something like: Player one chose Mr Maximus, Player two chose Dr Doof.
@Test Make a function call of 'characterSelect()'
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

function characterSelect(str) {
    let words = str.split(',')
    let words1 = words[0].split(' ')
    let words2 = words[1].split(' ')
    words = []
    words1.forEach(function (item) {
        words.push(item)
    })
    words2.forEach(function (item) {
        words.push(item)
    })

    playerOne = []
    playerTwo = []
    nameOne = ''
    nameTwo = ''
    checkOne = false
    checkTwo = false
    words.forEach( function (word) {
        switch (word) {
            case 'one':
                checkOne = true
                checkTwo = false
            break
            case 'two':
                checkOne = false
                checkTwo = true
            break
            case 'Mr':
            case 'Dr':
            case 'Mad':
                if (checkOne) {
                    nameOne += word
                } else if (checkTwo) {
                    nameTwo += word
                }
            break
            case 'Maximus':
            case 'Doof':
            case 'Margret':
                if (checkOne) {
                    nameOne += ' ' + word
                } else if (checkTwo) {
                    nameTwo += ' ' + word
                }
            default:
        }
    })
    for(let key in player) {
        const value = player[key]
        const dataValueType = typeof value
        if (dataValueType === 'object') {
            for(let nestedKey in value) {
                const nestedValue = value[nestedKey]
                if ( nameOne === nestedValue.name ) {
                    playerOne.push(nestedValue)
                } else if ( nameTwo === nestedValue.name) {
                    playerTwo.push(nestedValue)
                }
            }
        }
    }
    console.log({playerOne,playerTwo})
}
console.log('_6_ characterSelect')
 console.log(characterSelect('Player one chose Mr Maximus, Player two chose Dr Doof'))
/*
@Challenge 07 - Write a function called 'Mathmatical' where two numbers are passed as parameters. The first parameter divided by 
the second parameter will have a remainder, possibly zero. Return that value.
@Example - mathmatical(6,3) should return 2.
@Test - Make a function call of 'Mathmatical()'
*/

// my interpretation of the instructions is to return the whole number quotient.
function mathmatical (firstNum, secondNum) {
    let quotient = firstNum / secondNum
    let remainder = firstNum % secondNum
    if (remainder == 0 ) {
        return quotient
    } else { 
        return ( (firstNum - remainder) / secondNum)
    }
}
console.log('_7_ mathmatical')
console.log(mathmatical(6,3))
console.log(mathmatical(10,3))
/*
@Challenge 08 - Write a function called 'theSwitcherroo' that can reverse an array.
@Example - [1,2,3] would return as [3,2,1]
@Test - Make a function call of 'theSwitcherroo()'
*/
function theSwitcherroo (arr) {
    let retArray = []
    for(let i = arr.length - 1; i >= 0; i--) {
        retArray.push(arr[i])
    }
    return retArray
}
console.log('_8_ theSwitcherroo')
console.log(theSwitcherroo([1,2,3,4]))

/*
@Challenge 09 - Write a function called 'totalDestruction' that has an array of numbers and your goal is to removes any 
odd numbers but lets you know if there are only even numbers it will return a message letting the user know.
@Example - [20,35,73,82,51,94,103], the only numbers that would come back should be 20,82,94. When given [20,30,40]
a message should appear in the terminal saying something like: "No odd numbers detected"
@Test - Make a function call of 'totalDestruction()'
*/
function totalDestruction (arr) {
    const arrayLength = arr.length
    let retArray = []
    retArray = arr.filter(function(item) {
        return item % 2 === 0
    })
    if ( retArray.length == arrayLength) {
        console.log('No odd numbers detected')
    } else {
        return retArray
    }
}
console.log('_9_ totalDestruction')
console.log(totalDestruction([20,35,73,82,51,94,103]))
console.log(totalDestruction([20,30,40]))
/* 
@Challenge 10 - Write a function called 'heightRequirement' that checks the height of children who are trying to rida a Rollercoaster.
In order to ride the child must be 7 years or older and be over 4ft tall.
@Example - Using the given array show which children would be able to ride the rollercoaster.
@Test - Make a function calle of 'heightRequirement()'.
let children = [{
    age: 8,
    height: 4.1
},{
    age: 10,
    height: 4.5
},{
    age: 5,
    height: 3.5
}, {
    age: 7,
    height: 3.8
}]
*/
let children = [{
    age: 8,
    height: 4.1
},{
    age: 10,
    height: 4.5
},{
    age: 5,
    height: 3.5
}, {
    age: 7,
    height: 3.8
}]
function heightRequirement(arr) {
    minAge = 7
    minHeight = 4
    return arr.filter( function (child) {
        let ageCheck = false
        let heightCheck = false
        if (typeof child === 'object') {
            for (let key in child) {
                if (key === 'age') {
                    ageCheck = child[key] >= minAge
                } else if (key === 'height') {
                    heightCheck = child[key] >= minHeight
                }
            }
        }
        return (ageCheck && heightCheck)
    })
}
console.log('_10_ heightRequirement')
console.log(heightRequirement(children))
