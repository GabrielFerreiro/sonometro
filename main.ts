basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.soundLevel()))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
    }
})
