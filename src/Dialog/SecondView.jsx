var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    getInitialState: function() {
        return { };
    },
    render: function () {
        return (
            <div className="child-view panel panel-default" key={this.props.key}>
                <div className="panel-heading">Second View <button className="btn btn-xs btn-danger pull-right" onClick={this.close}><i className="fa fa-times"></i></button></div>
                <div className="panel-body">
                  Second View body
                </div>
            </div>
        );
    }
});