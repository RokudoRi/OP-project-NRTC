var Gpio = require('onoff').Gpio;
var LED = new Gpio(111, 'out');
var blinkInterval = setInterval(blinkLED, 250);

function blinkLED() {
	if (LED.readSync()===0){
		LED.writeSync(1);
	} else {
		LED.writeSync(0);
	}
}

function unexportOnClose() {
	LED.writeSync(0);
	LED.unexport();
	process.exit(0);
}

process.on('SIGINT', unexportOnClose);
