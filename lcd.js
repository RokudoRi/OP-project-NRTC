var LCD = require('lcdi2c');
var lcd = new LCD( 4, 0x27, 20, 4);


lcd.on();
lcd.clear();
lcd.setCursor(0,1);
lcd.print('Line');
lcd.setCursor(4,2);
lcd.print('No life');
