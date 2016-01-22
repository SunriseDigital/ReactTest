import React from 'react';
import ReactDOM from 'react-dom';
import ReactFlux from 'reactflux';

console.log(ReactFlux);

class List extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return <div>list</div>
  }
}

ReactDOM.render(<List />, document.getElementById('webpack'));