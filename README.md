# real-interval

A interval timer never sleep.

## Install

Run terminal, and type code as below:

```
npm install real-interval
```

## Usage

```
var Interval = require('real-interval');

var timer = new Interval(function(pass){
    console.log(pass);
}, 1000);

timer.stop();
```
