import classNames from 'classnames';
import React from 'react';
import Draggable from 'react-draggable';
import SecondView from './SecondView';
import DialogActions from '../actions/Dialog';

export default class FirstView extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddButton(e){
    this.props.onAddChild(SecondView);
  }

  onClickClose(e){
    DialogActions.close();
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          First View <button className="btn btn-xs btn-danger pull-right" onClick={this.onClickClose.bind(this)}><i className="fa fa-times"></i></button>
        </div>
        <div className="panel-body">
          <p>First View body</p>
          <button className="btn btn-primary" onClick={this.handleAddButton.bind(this)}>追加</button>
        </div>
      </div>
    );
  }
}
