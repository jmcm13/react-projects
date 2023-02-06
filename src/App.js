import React, { Component } from 'react';

class App extends Component {
  state = [
    {
      name: "Joshua",
      age: 25
    },
    {
      name: "Michal",
      age: 25
    },
    {
      name: "Mundo",
      age: 25
    }
  ]
  

  render() {
    return (
      <div className="App">
        {this.state.map(data => {
            return (
              <div>
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default App;