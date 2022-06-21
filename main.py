def on_received_string(receivedString):
    basic.show_string(receivedString)
    if receivedString == "F":
        motor.motor_run(motor.Motors.M1, motor.Dir.CCW, 130)
        motor.motor_run(motor.Motors.M2, motor.Dir.CW, 130)
    if receivedString == "B":
        motor.motor_run(motor.Motors.M1, motor.Dir.CW, 130)
        motor.motor_run(motor.Motors.M2, motor.Dir.CCW, 130)
radio.on_received_string(on_received_string)

radio.set_group(168)

def on_forever():
    if input.button_is_pressed(Button.A):
        radio.send_string("F")
        basic.show_icon(IconNames.YES)
    if input.button_is_pressed(Button.B):
        radio.send_string("B")
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
