var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');
var Draggable = require('react-draggable');
var SecondView = require('./SecondView.jsx')

module.exports = React.createClass({
    getInitialState: function() {
        return { };
    },
    handleAddButton: function(e){
      this.props.onAddChild(SecondView);
    },
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">First View <button className="btn btn-xs btn-danger pull-right" onClick={this.close}><i className="fa fa-times"></i></button></div>
                <div className="panel-body">
                  <p>First View body</p>
                  <button className="btn btn-primary" onClick={this.handleAddButton}>追加</button>
                </div>
            </div>
        );
    }
});