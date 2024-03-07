input.onButtonPressed(Button.A, function () {
    Logging = true
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    Logging = false
    radio.sendNumber(0)
})
let Temp = ""
let LightLevel = ""
let SoundLevel = ""
let Logging = false
radio.setGroup(1)
loops.everyInterval(100, function () {
    if (Logging == true) {
        if (input.soundLevel() >= 100) {
            SoundLevel = convertToText(input.soundLevel())
        } else if (input.soundLevel() >= 10) {
            SoundLevel = "0" + convertToText(input.soundLevel())
        } else if (input.soundLevel() >= 0 && input.soundLevel() < 10) {
            SoundLevel = "00" + convertToText(input.soundLevel())
        }
        if (input.lightLevel() >= 100) {
            LightLevel = convertToText(input.lightLevel())
        } else if (input.lightLevel() >= 10) {
            LightLevel = "0" + convertToText(input.lightLevel())
        } else if (input.lightLevel() >= 0 && input.lightLevel() < 10) {
            LightLevel = "00" + convertToText(input.lightLevel())
        }
        if (input.temperature() >= 10) {
            Temp = "0" + convertToText(input.temperature())
        } else if (input.temperature() >= 0) {
            Temp = "00" + convertToText(input.temperature())
        } else if (input.temperature() < 0) {
            Temp = "000"
        }
        if (input.lightLevel() >= 100) {
            LightLevel = convertToText(input.lightLevel())
        } else if (input.lightLevel() >= 10) {
            LightLevel = "0" + convertToText(input.lightLevel())
        } else if (input.lightLevel() >= 0 && input.lightLevel() < 10) {
            LightLevel = "00" + convertToText(input.lightLevel())
        }
        radio.sendString("" + LightLevel + SoundLevel + Temp)
    }
})
