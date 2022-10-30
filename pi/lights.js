const gpio = require('rpi-gpio');

module.exports = {
    playLights: () => {
        gpio.setup(26, gpio.DIR_OUT, (err) => {
            if(err) {
               console.log(err)
            } else {
                // Write reverse status to pin... gotta figure this one out later
                // TOOD: Why do i need to reverse the status?
                gpio.write(26, true, (err) => {
                    if(err) {
                        console.log(err);
                    }
                });
            }
        });
    }
}