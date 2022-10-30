const express = require('express');
const player = require('play-sound')({});
const process = require('process');
const path = require('path');
const app = express();
const port = 3000;

const soundPath = process.env.SOUNDFILES;



app.get('/', (_, res) => {
    res.send('Boo');
});

app.get('/sound', (req, res) => {
    player.play(`${path.join(soundPath, 'slimed')}.mp3`, function(err) {
        console.log(`${err} for ${path.join(soundPath, 'slimed')}.mp3`);
        if(err) throw err;
        setTimeout(() => {
        player.play(`${path.join(soundPath, 'stream')}.mp3`, function(err) {
            console.log(`${err} for ${path.join(soundPath, 'stream')}.mp3`);
            if(err) throw err;
        });
    }, 4000);
    });
    
    res.send(`playing sounds`);
});

app.listen(port, () => {
    console.log(`Server is running and listening to port ${port}`);
});
