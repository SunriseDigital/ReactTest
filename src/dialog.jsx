var Dialog = require('./Dialog/Dialog.jsx');
var React = require('react');
var ReactDOM = require('react-dom');

$(function(){
  var dialog = ReactDOM.render(<Dialog />, document.getElementById('dialog-wrapper'));
  $('.btn.open').on('click', function(e){
    dialog.open();
  });
});