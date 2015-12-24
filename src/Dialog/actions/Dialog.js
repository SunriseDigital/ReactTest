import Dispatcher from '../AppDispatcher';

export default {
  close: function () {
    Dispatcher.dispatch({
      type: 'CloseDialog'
    });
  },

  open: function () {
    Dispatcher.dispatch({
      type: 'OpenDialog'
    });
  },

  pushView: function(view){
    Dispatcher.dispatch({
      type: 'PushView',
      view: view
    });
  },

  popView: function(){
    Dispatcher.dispatch({
      type: 'PopView'
    });
  }
};