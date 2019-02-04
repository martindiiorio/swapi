import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Films from './components/Films';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Films />
      </div>
    );
  }
}

export default App;
