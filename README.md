# Halloween 2022

We're doing ghostbusters, at least most of us are :(

We've made a custom slimer, so let's make Isaac's costume light it up.

This project consists of two parts

1. `pi` - A node LIRC event handler for IR events (in our case, a universal remote, built into a fake proton pack) 
2. `server` - A node server which plays sounds on request (in our case, when the IR signal has been caught and responded to)

## pi

- The pi script listens for IR Events and responds accordingly
    - Once the signal has been recieved it will trigger a request to `server` which will play sounds
    - We'll also trigger some lights on and off with a relay setup hooked into the same pi

## server
- Simple node server running on a host
- When certain endpoints are requested it'll queue up each sound to be played
