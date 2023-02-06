import React, { Component } from 'react';

class App extends Component {
  state = {
    name: "Joshua",
    age: 25
  }
  
  handleOnClick = () => {
    this.setState({
      name: "Michal"
    })
  }

  render() {
    return (
      <div className="App">
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.handleOnClick}>Update</button>
      </div>
    );
  }
}

export default App;