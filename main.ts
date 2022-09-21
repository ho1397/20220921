input.onButtonPressed(Button.A, function () {
    basic.showNumber(MIN)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    degree = input.compassHeading()
    basic.showNumber(degree)
    basic.showString("º")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MAX)
    basic.clearScreen()
})
let degree = 0
let MAX = 0
let MIN = 0
basic.showNumber(0)
let CT = input.temperature()
MIN = CT
MAX = CT
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 45) {
        basic.showString("N")
    } else if (degree < 135) {
        basic.showString("E")
    } else if (degree < 225) {
        basic.showString("S")
    } else if (degree < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
basic.forever(function () {
    basic.showString(".")
    CT = input.temperature()
    if (CT < MIN) {
        MIN = CT
    }
    if (CT >= MAX) {
        MAX = CT
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
