# real-interval

a not sleep interval timer 

## Install

Run terminal, and type code as below:

```
npm install real-interval
```

## Usage

```
var Interval = require('real-interval');
```

```
new Interval(function(pass){

    // stop 
    if(pass = 60){
        this.stop(); 
        // or 
        // return false
    };

}, 1000);
```

```
new Interval(function(pass){

    // Automatic stop after 10 seconds

}, 1000, 60);
```


