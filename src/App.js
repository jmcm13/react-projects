import React, { Component } from 'react';
import data from './Data';
import Display from './Display';

class App extends Component {

  render() {
    return (
      <div className='parent-div'>
        <Display data={data} />
      </div>
    );
  }
}

export default App;