const prompt = require('prompt-sync')({sigint: true});

let userNumber = Number(prompt(`Pick any number! `))

if (userNumber % 3 === 0 && userNumber % 5 === 0) {
    console.log(`FizzBuzz`)
} else if (userNumber % 3 === 0) {
    console.log(`Fizz`)
} else if (userNumber % 5 === 0) {
    console.log(`Buzz`)
}