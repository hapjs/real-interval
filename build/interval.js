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

function Interval(callback, intv, total) {
    var self = this,
        st = new Date().getTime(),
        count = 0,
        excuteCount = 0,
        span,
        tick;

    if(!total){
        total = 0;
    };

    tick = function() {
        span = new Date().getTime() - st;
        count = Math.floor(span / intv);
        span = intv - (span % intv);

        self._timer = setTimeout(function() {
            if (self._stop) return;
            count++;
            excuteCount++;
            //
            if(false === callback.call(self, 
                count, 
                total - count, 
                count - excuteCount
                )
            ){
                self.stop();
                return;
            };
            //
            if(total && count >= total){
                self.stop();
                return;
            };
            //
            tick();
        }, span);
    };

    this.stop = function() {
        this._stop = true;
    };

    tick(0);

    return self;
};
return Interval;
}));
