(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.interval = f()
    }
})(function() {
    var define, module, exports;

    function interval(callback, intv, total) {
        var self = this,
            st = new Date().getTime(),
            count = 0,
            excuteCount = 0,
            span,
            fn;

        if (!total) {
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
                if (false === callback.call(self,
                        count,
                        total - count,
                        count - excuteCount
                    )) {
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

    return interval;
});