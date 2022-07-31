radio.onReceivedNumber(function (receivedNumber) {
    outdoorTemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(outdoorTemp)
})
let outdoorTemp = 0
radio.setGroup(1)
