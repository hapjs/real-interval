;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Interval = factory();
  }
}(this, function() {
'use strict';

function Interval(callback, interval, count, callbackNow) {

    var startTime, tick;

    if(typeof callback !== 'function') return;
    if(!interval) interval = 1000;
    if(!count) count = 0;

    startTime = new Date().getTime();

    tick = function() {

        var timespan, wait;

        timespan = new Date().getTime() - startTime,
        wait = interval - (timespan % interval);

        this.pass = Math.floor(timespan / interval) + 1;
        this.surplus = count - this.pass;

        setTimeout(function() {
            if (this._stop) return;

            if ( false === callback.call(this, this.pass, this.surplus) ){
                this.stop();
                return;
            }

            if ( count && !this.surplus){
                this.stop();
                return;
            }

            tick();

        }.bind(this), wait);

    }.bind(this);

    this.stop = function() {
        this._stop = true;
    }

    this.pass = 0;
    this.surplus = count - this.pass;

    if(callbackNow){
        callback.call(this, this.pass, this.surplus);
    };

    tick(0);

    return this;
};
return Interval;
}));
