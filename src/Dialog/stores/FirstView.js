import Events from 'events';
import Dispatcher from '../AppDispatcher';

class FirstViewStore extends Events.EventEmitter
{
  constructor() {
    super();
    this.component = null;
    this.dispatchToken = Dispatcher.register(function(payload){
      Dispatcher.callHandler(this, payload);
    }.bind(this));
  }

  getState(){
    return {

    };
  }

  addChangeListener(callback) {
      this.on('change', callback);
  }

  removeChangeListener(callback) {
      this.off('change', callback);
  }
}

export default new FirstViewStore();