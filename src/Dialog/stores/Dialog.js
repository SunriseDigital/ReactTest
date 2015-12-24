import Events from 'events';
import Dispatcher from '../AppDispatcher';

class DialogStore extends Events.EventEmitter
{
  constructor() {
    super();
    this.isOpen = false;
    this.children = [];
    this.dispatchToken = Dispatcher.register(function(payload){
      Dispatcher.callHandler(this, payload);
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

  handlePushView(payload){
    this.children.push(payload.view);
    this.emit('change');
  }

  handlePopView(payload){
    this.children.pop();
    this.emit('change');
  }

  getState(){
    return {
      'isOpen': this.isOpen,
      'children': this.children
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