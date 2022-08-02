import React from "react";
import { Navigate } from "react-router-dom";
import Login from './Login'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  handleLogin = (data) => {
    console.log("data:", data.user)
    this.setState({
      isLoggedIn: true,
      user: data.user
    }, () => {
      console.log("LoggedInStatus: ", this.state.isLoggedIn)
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    if(this.state.isLoggedIn === false) {
      return <Login handleLogin={this.handleLogin} />
    }

    return (
      <div>
        <h1>Hello from Home Component</h1>
        <p>Logged In Status: {this.state.isLoggedIn ? "Logged IN" : "Not Logged In"}</p>
        <p>Username: {this.state.user.username}</p>
      </div>
    )
  }
  
}

export default Home;