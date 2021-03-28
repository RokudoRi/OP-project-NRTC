const Gpio = require('onoff').Gpio;
const LED = new Gpio(111, 'out');
const pushButton = new Gpio(354, 'in', 'both');

pushButton.watch((err, value)=>{
	if (err){throw err;}
		console.log(value);
		LED.writeSync(value);
	}
);

function unexportOnClose() {
	LED.writeSync(0);
	LED.unexport();
	pushButton.unexport();
	process.exit(0);
};

process.on('SIGINT', unexportOnClose);
