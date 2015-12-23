import Dialog from './Dialog/Dialog';
import React from 'react';
import ReactDOM from 'react-dom';

$(function(){
  var dialog = ReactDOM.render(<Dialog />, document.getElementById('dialog-wrapper'));
  $('.btn.open').on('click', function(e){
    dialog.open();
  });
});