import Dispatcher from '../AppDispatcher';

export default {
  close: function () {
    Dispatcher.dispatch({
      type: 'CloseDialog'
    });
  }
};