import React from 'react';
import Navigation from './navigation'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: "Not_Logged_in",
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

export default App;
