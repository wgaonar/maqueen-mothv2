maqueenPlusV2.I2CInit()
basic.forever(function () {
    if (maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14) > 20) {
        if (input.lightLevel() > 25) {
            basic.showIcon(IconNames.Yes)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, input.lightLevel())
        } else {
            basic.showIcon(IconNames.No)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        }
    } else {
        basic.showIcon(IconNames.Ghost)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        basic.pause(100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
    }
})
