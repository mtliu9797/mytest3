radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "F") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 130)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 130)
    }
    if (receivedString == "B") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 130)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 130)
    }
})
radio.setGroup(168)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("F")
        basic.showIcon(IconNames.Yes)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
        basic.showIcon(IconNames.No)
    }
})
