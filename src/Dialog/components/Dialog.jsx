import classNames from 'classnames';
import React from 'react';
import Draggable from 'react-draggable';
import FirstView from './FirstView';
import DialogStore from '../stores/Dialog';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Dialog extends React.Component
{
  constructor(props) {
    super(props);
    this.state = DialogStore.getState();
  }

  onStoreChange(){
    this.setState(DialogStore.getState());
  }

  componentWillMount() {
    DialogStore.addChangeListener(this.onStoreChange.bind(this));
  }

  componentWillUnmount() {
    DialogStore.removeChangeListener(this.onStoreChange.bind(this));
  }

  render(){
    console.log('update view state');
    var dialogClass = classNames({
      'dialog': true,
      'hidden': !this.state.isOpen
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
        <div className={dialogClass}>
            <FirstView />
            <ReactCSSTransitionGroup transitionName="push" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {this.state.children.map(function(View, key){
              return (<View key={key} />)
            })}
            </ReactCSSTransitionGroup>
        </div>
      </Draggable>
    );
  }
}
