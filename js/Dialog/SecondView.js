var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({displayName: "exports",
    getInitialState: function() {
        return { };
    },
    render: function () {
        return (
            React.createElement("div", {className: "child-view panel panel-default", key: this.props.key}, 
                React.createElement("div", {className: "panel-heading"}, "Second View ", React.createElement("button", {className: "btn btn-xs btn-danger pull-right", onClick: this.close}, React.createElement("i", {className: "fa fa-times"}))), 
                React.createElement("div", {className: "panel-body"}, 
                  "Second View body"
                )
            )
        );
    }
});