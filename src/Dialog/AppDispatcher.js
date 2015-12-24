import Flux from 'flux';
import assign from 'object-assign';

export default assign(new Flux.Dispatcher(), {
  callHandler: function(targetStore, payload){
    var methodName = 'handle' + payload.type;
    targetStore[methodName] && targetStore[methodName].call(targetStore, payload);
  }
});