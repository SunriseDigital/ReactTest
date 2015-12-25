import BaseStore from './BaseStore.js';

class FirstViewStore extends BaseStore
{
  constructor() {
    super();
    this.component = null;
  }

  getState(){
    return {

    };
  }
}

export default new FirstViewStore();