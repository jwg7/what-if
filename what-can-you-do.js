const prompt = require('prompt-sync')({sigint: true});

let userAge = Number(prompt(`What is your age?`));

if (userAge < 16) {
    console.log(`You can't drive`)
} else if (userAge === 16 || userAge === 17) {
    console.log(`You can drive but not vote.`)
} else if (userAge > 18 && userAge <= 24) {
    console.log(`You can vote but not rent a car.`)
} else if (userAge >= 25) {
    console.log(`You can do pretty much anything.`)
}