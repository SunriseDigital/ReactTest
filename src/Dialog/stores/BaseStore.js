import Events from 'events';
import Dispatcher from '../AppDispatcher';

export default class BaseStore extends Events.EventEmitter
{
  constructor() {
    super();
    this.dispatchToken = Dispatcher.register(function(payload){
      var methodName = 'handle' + payload.type;
      this[methodName] && this[methodName].call(this, payload);
    }.bind(this));
  }

  addChangeListener(callback) {
      this.on('change', callback);
  }

  removeChangeListener(callback) {
      this.off('change', callback);
  }
}