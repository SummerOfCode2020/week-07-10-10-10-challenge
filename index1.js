// Personal practice and segmented review from codecademy
// 7/17


// Count from five
/*
for (let i = 5; i < 11; i++) {
    console.log(i)
}
*/

//

// The loop below loops from 0 to 3. 
/*
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
}
*/

// This loops through vacation spots
/*
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i]);
}
*/


// This is a nested loop that compares mutual friends in arrays
/*
const bobsFollowers = ['John', 'Carl', 'Jenny', 'T\'Pol'];
const tinasFollowers = ['Jenny', 'Gina', 'Carl'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j])
        }
    }
}
console.log(mutualFollowers)
*/

// Simple for loop that logs 0-4 to the console
/*
for (let num = 0; num < 5; num++) {
  console.log(num)
}
*/

// While loop that logs 0-4 to the console
/*
let counter = 0;
while (counter < 5) {
    / Why does putting the console.log here matter?
    / If I move it, the counter prints the wrong range...WHY?
  console.log(counter);
  counter++;
}
*/

// Random card suite picker
/*
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};
*/

// Basic do...while counter
/*
let countString = '';
let i = 0;

do {
  countString += i;
  i++;
} while (i < 5);

console.log(countString);
*/

// Sugar adder!
/*
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
*/

// Looping at some famous rap artists
/*
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  };
}
console.log("And if you don't know, now you know.");
*/

// New Dog Age Formula
// <href="https://www.sciencedaily.com/releases/2020/07/200702113649.htm#:~:text=The%20comparison%20revealed%20a%20new,puppies%20and%20babies%20develop%20teeth."</href>
/*
function dogHumanYears(year) {
  function() {
    humanAge = 16 * Math.ln * (dogAge) + 31
  },
  let humanAge = 0;
  let dogAge = 0;


}

if (dogHumanYears < 17) {
  console.log("You're a little puppy!")
} else if (dogHumanYears > 17 && dogHumanYears < 35) {
  console.log("You're a young adult dog!")
} else if (dogHumanYears > 35 && dogHumanYears < 60) {
  console.log("You're a professional adult doggo!")
} else {
  console.log("Now you're an honored grand dog :D")
};
*/

// Parrot Practice 
/*
function parrotTrouble(talking, hour) {
  if (talking === true && hour > 20) {
    return true;
  }
  else if (talking === true && hour < 7) {
    return true;
  }
  else if (talking === false) {
    return false;
  }
  else {
    return false;
  }
};
console.log(parrotTrouble(false, 6))
*/

// Variables that either are ten, or when added make ten.
/*
function makesTen(a, b) {
  if (a === 10 || b === 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else {
    return false;
  }
};
console.log(makesTen(5, 5))
*/

// Within ten of 100, or within ten of 200
/*
function nearHundred(n) {
  if (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10) {
    return true;
  } else {
    return false;
  }
};
*/

// Stuck on <href= "https://the-winter.github.io/codingjs/exercise.html?name=posNeg&title=Warmup-1" </href>

/*
function posNeg(a, b, negative) {
 if (a < 0 || b < 0 && negative === true) {
    return true;
  } else if (a < 0 && b < 0 && negative === false) {
    return false;
  } else if (a < 0 || b < 0 && negative === true) {
    return false;
  } else if (a < 0 || b < 0 && negative === false) {
    return true;
  } else {
    return false;
  }
};
*/


