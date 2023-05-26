const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)

let answer = num1 + num2

rl.question(`What is ${num2}+${num2}?\n`, (userInput) => {
    console.log(userInput)
    if (userInput == answer) {
        rl.close()
    } else {
        rl.setPrompt("incorrect answer try again")
        rl.prompt()
        rl.on('line', (userInput) => {
            if (userInput.trim() == answer) {
                rl.close()
            } else {
                rl.setPrompt("your ans incorrect")
            }
        })
    }
})

rl.on('close', () => { console.log("closeee") })