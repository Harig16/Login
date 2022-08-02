import React from 'react';
import Navigation from './navigation'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
    console.log("isloggedin: ", this.state.isLoggedIn)
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation isLoggedIn={this.state.isLoggedIn} user={this.state.user} handleLogin={this.handleLogin} />
      </div>
    );
  }
}

export default App;
