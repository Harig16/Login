import React from 'react';
import Navigation from './navigation'
import './App.css';
import Home from './components/Home'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
