/*
@Challenge 01 - Write a function named 'toNumber' that takes a number string and converts it to a regular number.
@Example - Sending the function a value of '2' would return 2.
@Test - Write a console.log that shows the result of 'toNumber('4')'
*/

function toNumber(index){
 let string = parseInt(index,10)
    return string
} 
console.log (toNumber('4'))

/*
@Challenge 02 - Write a function named 'priceTotal' that uses the .reduce() method to subtract numbers in an array.
@Example - Sending [100, 50, 20] through the function should return 30.
@Test - Make a function call of 'priceTotal()'
*/
function priceTotal(numbersInArray){
    let result = numbersInArray.reduce(function (array,total){
        return array - total
    })
        return result 
} console.log(priceTotal([100,50,20]))

/*
@Challenge 03 - Write a function called 'happyHour' that has an array of numbers from 16 to 25 and filter out all the number from 21 and up.
@Example - When sent through the function 21, 22, 23, 24 and 25 should be the only numbers returning.
@Test - Make a function call of 'happyHour()'
*/
function happyHour(age){
let legalAge = age.filter((age) => {
    return age >= 21
})
    return legalAge
} console.log(happyHour([19,20,21,22,23]))

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

function breakTheNest (Names){
    //if(person)
    return person.name.firstName + " "+ "drives a " + person.car.year + " " + person.car.make + person.car.model + "."

    
}
console.log(breakTheNest(person))
/*
@Challenge 05 - Write a function called 'reverseErase' that takes an array of words, and takes a word and returns the new word without including the first character.
@Example - ['Apple', 'Cinnamon', 'Acorn', 'Bread'] should return as: ['pple', 'innamon', 'corn', 'ead']
@Test - Make a function call of 'reverseErase()'
*/
function reverseErase(arr){
   
  
     return arr.map(x => x.substring (1))
     
    }

/*
@Challenge 06 - Write a function called 'characterSelect' that has an array of characters and you are tasked with having two players select their character.
@Example - you should get something like: Player one chose Mr Maximus, Player two chose Dr Doof.
@Test Make a function call of 'characterSelect()'*/
let player = [{
    character1: {
        name: 'Mr Maximus',
        power: 'Psychic abilities'
    }
    }, {
    character2: {
        name: 'Dr Doof',
        power: 'Mediocore tech skills'
    }
    }, {
        character3: {
            name: 'Mad Margret',
            power: 'Super strength'
        }
    }
]
function characterSelect(player){
    //try for loop or .map 

    return ("Player one chose " + player[0].character1.name) + ". " +
    ("Player two chose " + player[1].character2.name + "." + "Player three chose " + player[2].character3.name + ".")

}
console.log(characterSelect(player))


/*
@Challenge 07 - Write a function called 'Mathmatical' where two numbers are passed as parameters. The first parameter divided by 
the second parameter will have a remainder, possibly zero. Return that value.
@Example - mathmatical(6,3) should return 2.
@Test - Make a function call of 'Mathmatical()'

*/
function Mathmatical(x,y){
    
    return x/y

};
console.log(Mathmatical(8,4))
/*
@Challenge 08 - Write a function called 'theSwitcherroo' that can reverse an array.
@Example - [1,2,3] would return as [3,2,1]
@Test - Make a function call of 'theSwitcherroo()'
*/
function theSwitcherroo(arr){
    //let arr =[1,2,3,4]
    //pop and then push to newArr
    let newArr = [];
    //arr.reverse()
    for(let i= 0; i < arr.length; i++){
       newArr.push(arr);
    }
    let reverseStr = [''];
    while (arr.length > 0){
    reverseStr += arr.pop();
    }
        return reverseStr
    

}

console.log(theSwitcherroo([1,2,3,4,5]))
/*
@Challenge 09 - Write a function called 'totalDestruction' that has an array of numbers and your goal is to removes any 
odd numbers but lets you know if there are only even numbers it will return a message letting the user know.
@Example - [20,35,73,82,51,94,103], the only numbers that would come back should be 20,82,94. When given [20,30,40]
a message should appear in the terminal saying something like: "No odd numbers detected"
@Test - Make a function call of 'totalDestruction()'
*/
function totalDestruction(arrOfNum){
    
    let arr =[]
    
    for(let i = 0; i < arrOfNum.length; i ++){
        
       
        if (arrOfNum[i] % 2 === 0){
            arr.push(arrOfNum[i])
        };
       
        
            
        }
       return arr;
        
        
    }




console.log(totalDestruction([20,35,73,82,51,94,103]))
/* 
@Challenge 10 - Write a function called 'heightRequirement' that checks the height of children who are trying to rida a Rollercoaster.
In order to ride the child must be 7 years or older and be over 4ft tall.
@Example - Using the given array show which children would be able to ride the rollercoaster.
@Test - Make a function calle of 'heightRequirement()'.*/
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
function heightRequirement(children) {
    let arr = []
    for (const child of children) {
        if (child.age >= 7 && child.height > 4)
            arr.push(child)
    }
    return arr
}

console.log(heightRequirement(children))
/*function heightRequirement(child){
    let arr = [];
    let age = arr.age;
    let height = arr.height ;
    let nuArr = arr.push([children])
    for(let i = 0; i < child.length; i ++){
    if (age >= 7 && height > 4);
    }
    return nuArr
}  */  

     
