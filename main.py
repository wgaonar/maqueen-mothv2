maqueenPlusV2.i2c_init()

def on_forever():
    if input.light_level() > 25:
        basic.show_icon(IconNames.YES)
        maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.ALL_MOTOR,
            maqueenPlusV2.MyEnumDir.FORWARD,
            input.light_level())
    else:
        basic.show_icon(IconNames.NO)
        maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.LEFT_MOTOR,
            maqueenPlusV2.MyEnumDir.FORWARD,
            255)
        maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.RIGHT_MOTOR,
            maqueenPlusV2.MyEnumDir.FORWARD,
            50)
basic.forever(on_forever)
