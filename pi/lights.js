const gpio = require('rpi-gpio');

module.exports = {
    playLights: () => {
        console.log('playing lights');
        gpio.setup(12, gpio.DIR_OUT, (err) => {
            console.log('setting up 18')
            if(err) {
               console.log(err)
            } else {
                // Write reverse status to pin... gotta figure this one out later
                // TOOD: Why do i need to reverse the status?
                console.log('writing to 18');
                gpio.write(12, false, (err) => {
                    if(err) {
                        console.log(err);
                    }

                    setTimeout(() => {
                        gpio.write(12, true, (err) => {
                            if(err) {
                                console.log(err);
                            }
                        });
                    }, 5000);
                });
            }
        });
    }
}