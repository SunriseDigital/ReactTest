import classNames from 'classnames';
import React from 'react';
import Draggable from 'react-draggable';
import FirstView from './FirstView.jsx';

export default class Dialog extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      shouldHide: true,
      children: []
    };
  }

  addChild(childView){
    this.setState({children: [childView]});
  }

  open(){
    this.setState({shouldHide: false});
  }

  close(){
    this.setState({shouldHide: true});
  }

  render(){
    var dialogClass = classNames({
      'dialog': true,
      'hidden': this.state.shouldHide
    });

    var key = 0;
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
        <div className={dialogClass} ref="wrapper">
            <FirstView onAddChild={this.addChild.bind(this)} />
            {this.state.children.map(function(ChildView){
                var key = key + 1;
                return (<ChildView key={key} />);
            })}
        </div>
      </Draggable>
    );
  }
}
