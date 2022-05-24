const prompt = require('prompt-sync')({ sigint: true });

let userWeight = Number(prompt(`What is your Earth weight? `))

let userPlanet = Number(prompt(`Enter 1 - 6 for the planet you want to fight on: `))

if (userPlanet === 1) {
    console.log(`You selected Venus. You will need to weigh ${userWeight * .78}`)
} else if (userPlanet === 2) {
    console.log(`You selected Mars. You will need to weigh ${userWeight * .39}`)
} else if (userPlanet === 3) {
    console.log(`You selected Jupiter. You will need to weigh ${userWeight * 2.65}`)
} else if (userPlanet === 4) {
    console.log(`You selected Saturn. You will need to weigh ${userWeight * 1.17}`)
} else if (userPlanet === 5) {
    console.log(`You selected Uranus. You will need to weigh ${userWeight * 1.05}`)
} else if (userPlanet === 6) {
    console.log(`You selected Neptune. You will need to weigh ${userWeight * 1.23}`)
}