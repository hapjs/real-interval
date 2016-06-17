'use strict';

function Interval(callback, intv, total) {
    var self = this,
        st = new Date().getTime(),
        count = 0,
        excuteCount = 0,
        span,
        fn;

    if(!total){
        total = 0;
    };

    fn = function() {
        span = new Date().getTime() - st;
        count = Math.floor(span / intv);
        span = intv - (span % intv);

        self._timer = setTimeout(function() {
            if (self._stop) return;
            count++;
            excuteCount++;
            fn();
            if(false === callback.call(self, 
                count, 
                total - count, 
                count - excuteCount
                )
            ){
                self.stop();
            };
        }, span);
    };

    this.stop = function() {
        this._stop = true;
    };

    fn(0);

    return self;
};