if(!STK) {

    var STK = (function() {

        var _this = {};

        _this.define = function(namespace, maker) {
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
            var NSList = namespace.split('.');
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

        _this.extend = function(namespace, proto) {
            var clazz = _this.clazz(namespace);
            var obj = Object.create(clazz.prototype);
            if(proto) {
                for(var funcName in proto) {
                    obj[funcName] = proto[funcName];
                }
            }
            return obj;
        };

        return _this;

    })();

}