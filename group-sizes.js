const prompt = require('prompt-sync')({sigint: true});

let classSize = Number(prompt(`How many people are in your class?`))



if (classSize % 3 === 0) {
    console.log(`You will have ${classSize / 3} groups of 3`)
} else if (classSize % 3 === 1) {
    console.log(`You will have ${(classSize - 4) / 3} groups of 3, and 2 groups of two.`)
} else if (classSize % 3 === 2) {
    console.log(`You will have ${(classSize - 2) / 3} groups of 3, and 1 group of 2`)
}