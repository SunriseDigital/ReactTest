import Dialog from './components/Dialog';
import React from 'react';
import ReactDOM from 'react-dom';
import DialogActions from './actions/Dialog';

$(function(){
  ReactDOM.render(<Dialog />, document.getElementById('dialog-wrapper'));
  $('.btn.open').on('click', function(e){
    DialogActions.open();
  });
});