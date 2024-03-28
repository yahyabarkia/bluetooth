bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
basic.showIcon(IconNames.No)
bluetooth.startAccelerometerService()
basic.forever(function () {
	
})
