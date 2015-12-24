import Events from 'events';
import Dispatcher from '../AppDispatcher';

class DialogStore extends Events.EventEmitter
{
  constructor() {
    super();
    this.isOpen = false;
    this.dispatchToken = Dispatcher.register(function(payload){
      console.log('call handler in store');
      var methodName = 'handle' + payload.type;
      if(!this[methodName]){
        throw 'Missing handling method '+ methodName;
      }
      this[methodName](payload);
    }.bind(this));
  }

  handleCloseDialog(payload){
    this.isOpen = false;
    this.emit('change');
  }

  handleOpenDialog(payload){
    this.isOpen = true;
    this.emit('change');
  }

  getState(){
    return {
      'isOpen': this.isOpen
    };
  }

  addChangeListener(callback) {
      this.on('change', callback);
  }

  removeChangeListener(callback) {
      this.off('change', callback);
  }
}

export default new DialogStore();