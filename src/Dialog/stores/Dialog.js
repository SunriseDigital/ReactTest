import BaseStore from './BaseStore.js';

class DialogStore extends BaseStore
{
  constructor() {
    super();
    this.isOpen = false;
    this.children = [];
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
}

export default new DialogStore();