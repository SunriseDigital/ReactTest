import React from 'react';
import DialogActions from '../actions/Dialog';
import Frame from './Frame.jsx';


export default class SecondView extends React.Component
{
  constructor(props) {
    super(props);
  }

  pushSecondView(e){
    DialogActions.pushView(SecondView);
  }

  render() {
    return (
      <Frame title="Second View" enableBackButton={true}>
        <p>Second View body</p>
        <button className="btn btn-primary" onClick={this.pushSecondView.bind(this)}>追加</button>
      </Frame>
    );
  }
}