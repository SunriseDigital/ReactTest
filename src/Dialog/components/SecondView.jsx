import classNames from 'classnames';
import React from 'react';
import FirstViewStore from '../stores/FirstView';
import ReactDOM from 'react-dom';
import DialogActions from '../actions/Dialog';


export default class SecondView extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {};
  }

  popView(){
    DialogActions.popView();
  }

  componentDidMount() {
    var $firstView = $(ReactDOM.findDOMNode(FirstViewStore.component));
    var $self = $(ReactDOM.findDOMNode(this));
    var top = $self.offset().top - $firstView.offset().top;
    this.setState({
      style: {
        top: - top
      }
    });
  }

  render() {
    return (
      <div className="child-view panel panel-default" key={this.props.key} style={this.state.style}>
        <div className="panel-heading">
          Second View
        </div>
        <div className="panel-body">
          <p>Second View body</p>
          <button className="btn btn-primary" onClick={this.popView.bind(this)}>閉じる</button>
        </div>
      </div>
    );
  }
}