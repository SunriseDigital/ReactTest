import Events from 'events';
import Dispatcher from '../AppDispatcher';

class DialogStore extends Events.EventEmitter
{
  constructor() {
    super();
    var self = this;
    this.dispatchToken = Dispatcher.register(this.handleDispatch.bind(this));
  }

  handleDispatch(payload) {
    switch(payload.type){
      case 'CloseDialog':
        this.emit('close');
        break;
    }
  }

  addCloseListener(callback) {
      this.on('close', callback);
  }

  removeCloseListener(callback) {
      this.off('close', callback);
  }
}

export default new DialogStore();