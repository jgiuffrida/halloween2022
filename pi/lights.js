const gpio = require('rpi-gpio');

const PIN = 12;

const writePin = (value, cb) => {
    gpio.write(PIN, value, (err) => {
        if (err) {
            console.log(`error writing ${value.toString()} to ${PIN}`);
        } else {
            cb(value);
        }
    })
}

const onOffOn = (cb) => {
    writePin(true, () => {
        setTimeout(() => {
            writePin(false, () => {
                setTimeout(() => {
                    writePin(true, cb);
                }, 200)
            })
        }, 250);
    });
}

module.exports = {
    playLights: () => {
        console.log('playing lights');
        gpio.setup(PIN, gpio.DIR_OUT, (err) => {
            setTimeout(() => {
                onOffOn(() => {
                    setTimeout(() => {
                        onOffOn(() => {
                            setTimeout(() => {
                                onOffOn(() => {
                                    setTimeout(() => {
                                        onOffOn(() => {
                                            setTimeout(() => {
                                                writePin(false);
                                            });
                                        })
                                    }, 6000)
                                })
                            }, 4000)
                        });
                    }, 2000)
                })
            }, 4000); // don't start flashing until the stream comes on
        });
    }
}