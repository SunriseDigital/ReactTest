import React from 'react';
import SecondView from './SecondView';
import DialogActions from '../actions/Dialog';
import Frame from './Frame.jsx';

export default class FirstView extends React.Component
{
  constructor(props) {
    super(props);
  }

  pushSecondView(e){
    DialogActions.pushView(SecondView);
  }

  render() {
    return (
      <Frame title="First View">
        <p>First View body</p>
        <button className="btn btn-primary" onClick={this.pushSecondView.bind(this)}>追加</button>
      </Frame>
    );
  }
}
