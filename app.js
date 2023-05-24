const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on("tutorial", (num1, num2) => { console.log(num2 + num1) })

eventEmitter.emit("tutorial", 1, 2)