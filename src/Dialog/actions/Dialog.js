import Dispatcher from '../AppDispatcher';

export default {
  close: function () {
    console.log('call action method');
    console.log('call dispatcher');
    Dispatcher.dispatch({
      type: 'CloseDialog'
    });
  },

  open: function () {
    console.log('call action method');
    console.log('call dispatcher');
    Dispatcher.dispatch({
      type: 'OpenDialog'
    });
  }
};