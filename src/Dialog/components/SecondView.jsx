import classNames from 'classnames';
import React from 'react';
import FirstViewStore from '../stores/FirstView';
import ReactDOM from 'react-dom';
import DialogActions from '../actions/Dialog';
import Frame from './Frame.jsx';


export default class SecondView extends React.Component
{
  constructor(props) {
    super(props);
  }

  popView(){
    DialogActions.popView();
  }

  render() {
    return (
      <Frame title="Second View">
        <p>Second View body</p>
        <button className="btn btn-primary" onClick={this.popView.bind(this)}>閉じる</button>
      </Frame>
    );
  }
}