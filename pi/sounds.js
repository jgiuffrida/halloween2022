const { exec } = require('child_process');

module.exports = {
    playSound: () => {
        exec("curl http://192.168.0.161:3000/sound", (error) => {
            console.log('error', error.message);
        });
    }
}
