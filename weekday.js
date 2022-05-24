const prompt = require('prompt-sync')({sigint: true});

let userNumber = Number(prompt(`Give me a number 1 -7`));

if (userNumber === 1) {
    console.log(`Monday`)
} else if (userNumber === 2) {
    console.log(`Tuesday`)
} else if (userNumber === 3) {
    console.log(`Wednesday`)
} else if (userNumber === 4) {
    console.log(`Thursday`)
} else if (userNumber === 5) {
    console.log(`Friday`)
} else if (userNumber === 6) {
    console.log(`Saturday`)
} else if (userNumber === 7) {
    console.log(`Sunday`)
} else {
    console.log(`error`)
}