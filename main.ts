radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "^") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 130)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 130)
    }
    if (receivedString == "v") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 130)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 130)
    }
})
radio.setGroup(168)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("^")
        basic.showString("^")
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 130)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 130)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("v")
        basic.showString("v")
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 130)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 130)
    }
})
