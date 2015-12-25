import React from 'react';
import DialogActions from '../actions/Dialog';
import ReactDOM from 'react-dom';
import FirstViewStore from '../stores/FirstView';

export default class Frame extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {top: 0};
  }

  onClickClose(e){
    DialogActions.close();
  }

  componentDidMount() {
    var $firstView = $(ReactDOM.findDOMNode(FirstViewStore.component));
    var $self = $(ReactDOM.findDOMNode(this));
    var top = $self.offset().top - $firstView.offset().top;
    this.setState({top: -top + "px"});
  }

  render() {
    return (
      <div className="child-view panel panel-default" key={this.props.key} style={{top: this.state.top}}>
        <div className="panel-heading">
          {this.props.title}
          <button className="btn btn-xs btn-danger pull-right" onClick={this.onClickClose.bind(this)}><i className="fa fa-times"></i></button>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}