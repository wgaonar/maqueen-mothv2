maqueenPlusV2.I2CInit()
basic.forever(function () {
    if (input.lightLevel() > 25) {
        basic.showIcon(IconNames.Yes)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, input.lightLevel())
    } else {
        basic.showIcon(IconNames.No)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
    }
})
