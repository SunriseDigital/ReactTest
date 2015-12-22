var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');
var Draggable = require('react-draggable');
var SecondView = require('./SecondView.js')

module.exports = React.createClass({displayName: "exports",
    getInitialState: function() {
        return { };
    },
    handleAddButton: function(e){
      this.props.onAddChild(SecondView);
    },
    render: function () {
        return (
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, "First View ", React.createElement("button", {className: "btn btn-xs btn-danger pull-right", onClick: this.close}, React.createElement("i", {className: "fa fa-times"}))), 
                React.createElement("div", {className: "panel-body"}, 
                  React.createElement("p", null, "First View body"), 
                  React.createElement("button", {className: "btn btn-primary", onClick: this.handleAddButton}, "追加")
                )
            )
        );
    }
});