import React, { Component } from 'react';

class App extends Component {
  render() {
    const letter: string = 'l';
    return (
      <div>
        <h1>My React TestApp</h1>
        <h3>{letter}</h3>
      </div>
    );
  }
}

export default App;
