import React from 'react';
import DialogActions from '../actions/Dialog';
import ReactDOM from 'react-dom';

export default class Frame extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {top: 0};
  }

  onClickClose(e){
    DialogActions.close();
  }

  popView(){
    DialogActions.popView();
  }

  componentDidMount() {
    var $self = $(ReactDOM.findDOMNode(this));
    var $wrapper = $self.closest('.dialog');
    var top = $self.offset().top - $wrapper.offset().top;
    this.setState({top: -top + "px"});
  }

  render() {

    var backButton;
    if(this.props.enableBackButton){
      backButton = ( <button className="btn btn-default btn-sm" onClick={this.popView.bind(this)}><i className="fa fa-chevron-left"></i> 戻る</button>);
    } else {
      backButton = (<span>&nbsp;</span>);
    }

    return (
      <div className="child-view panel panel-default" key={this.props.key} style={{top: this.state.top}}>
        <div className="panel-heading row">
          <div className="col-xs-4">{backButton}</div>
          <div className="col-xs-4 text-center">{this.props.title}</div>
          <div className="col-xs-4">
            <button className="btn btn-sm btn-danger pull-right" onClick={this.onClickClose.bind(this)}><i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}