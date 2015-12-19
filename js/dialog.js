var Dialog = require('./Dialog/Dialog.js');
var React = require('react');
var ReactDOM = require('react-dom');

$(function(){
  var dialog = ReactDOM.render(React.createElement(Dialog, null), document.getElementById('dialog-wrapper'));
  $('.btn.open').on('click', function(e){
    dialog.open();
  });
});