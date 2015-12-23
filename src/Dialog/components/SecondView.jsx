import classNames from 'classnames';
import React from 'react';

export default class SecondView extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="child-view panel panel-default" key={this.props.key}>
        <div className="panel-heading">
          Second View <button className="btn btn-xs btn-danger pull-right" onClick={this.close}><i className="fa fa-times"></i></button>
        </div>
        <div className="panel-body">
          Second View body
        </div>
      </div>
    );
  }
}