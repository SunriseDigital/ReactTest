var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');
var Draggable = require('react-draggable');

var FirstView = require('./FirstView.js')


module.exports = React.createClass({displayName: "exports",
    getInitialState: function() {
        return {
            shouldHide: true,
            children: []
        };
    },
    // handleStart: function (event, ui) {
    //     console.log('Event: ', event);
    //     console.log('Position: ', ui.position);
    // },

    // handleDrag: function (event, ui) {
    //     console.log('Event: ', event);
    // console.log('Position: ', ui.position);
    // },

    // handleStop: function (event, ui) {
    //     console.log('Event: ', event);
    // console.log('Position: ', ui.position);
    // },

    addChild: function(childView){
        this.setState({children: [childView]});
    },

    open: function(){
      this.setState({shouldHide: false});
    },
    close: function(){
      this.setState({shouldHide: true});
    },
    render: function () {
        var dialogClass = classNames({
          'dialog': true,
          'hidden': this.state.shouldHide
        });

        var key = 0;
        return (
            React.createElement(Draggable, {
                // axis="x"
                handle: ".panel-heading", 
                start: {x: 0, y: 0}, 
                // grid={[25, 25]}
                zIndex: 100, 
                onStart: this.handleStart, 
                onDrag: this.handleDrag, 
                onStop: this.handleStop}, 
                React.createElement("div", {className: dialogClass, ref: "wrapper"}, 
                    React.createElement(FirstView, {onAddChild: this.addChild}), 
                    this.state.children.map(function(ChildView){
                        var key = key + 1;
                        return (React.createElement(ChildView, {key: key}));
                    })
                )
            )
        );
    }
});