if(!STK) {

    var STK = (function() {

        var _this = {};

        _this.define = function(ns, maker) {
            var NSList = ns.split('.');
            var step = _this;
            var k = null;
            while(k = NSList.shift()){
                if(NSList.length){
                    if(step[k] === undefined){
                        step[k] = {};
                    }
                    step = step[k];
                } else {
                    if(step[k] === undefined){
                        step[k] = maker(_this);
                    }
                }
            }
            return false;
        };

        _this.clazz = function(namespace) {
            var NSList = ns.split('.');
            var step = _this;
            var k = null;
            while(k = NSList.shift()){
                if(step[k] === undefined){
                    throw new Error('undefined namespace : ' + namespace);
                }
                step = step[k];
            }
            return step;
        };

        _this.extend = function(ns, proto) {
            var clazz = _this.clazz(ns);
            var obj = Object.create(clazz.prototype);
            if(proto) {
                for(var funcName in proto) {
                    obj[funcName] = proto[funcName];
                }
            }
            return obj;
        };

    })();

}