const gpio = require('rpi-gpio');

const PIN = 12;

const writePin = (value, cb) => {
    gpio.write(PIN, value, (err) => {
        if (err) {
            console.log(`error writing ${(!value).toString()} to ${PIN}`);
            cb(value);
        } else {
            cb(value);
        }
    })
}

const onOffOn = (cb) => {
    writePin(false, () => {
        setTimeout(() => {
            writePin(true, () => {
                setTimeout(() => {
                    writePin(false, cb);
                }, 200)
            })
        }, 250);
    });
}

// can you tell I wrote this the night before halloween?
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
                                                writePin(true, () => {
                                                    console.log('finished light sequence')
                                                });
                                            });
                                        })
                                    }, 6000)
                                })
                            }, 4000)
                        });
                    }, 2000)
                })
            }, 4500); // don't start flashing until the stream comes on
        });
    }
}