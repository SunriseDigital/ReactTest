var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');
var Draggable = require('react-draggable');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({
    getInitialState: function() {
        return { shouldHide: true };
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

    open: function(){
      this.setState({shouldHide: false});
    },
    close: function(){
      this.setState({shouldHide: true});
    },
    render: function () {
        var dialogClass = classNames({
          'dialog panel panel-default': true,
          'hidden': this.state.shouldHide
        });

        var items = [];
        if(!this.state.shouldHide){
            items.push("aaaa");
        }

        return (
            <Draggable
                // axis="x"
                handle=".panel-heading"
                start={{x: 0, y: 0}}
                // grid={[25, 25]}
                zIndex={100}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className={dialogClass}>
                    <div className="panel-heading">Drag from here <button className="btn btn-xs btn-danger pull-right" onClick={this.close}><i className="fa fa-times"></i></button></div>
                    <div className="panel-body">
                        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                            {items.map(function(value){
                                var key = Date.now();
                                return <div key={key}>{value}</div>
                            })}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </Draggable>
        );
    }
});