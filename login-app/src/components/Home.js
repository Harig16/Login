import React from "react";
import { Navigate } from "react-router-dom";
import Login from './Login'
import axios from 'axios';
import { Link } from "react-router-dom";

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  handleUser = () => {
    axios
      .get('/me')
      .then(res => {
        //const user = res.data;
        this.setState({
          isLoggedIn: true,
          user: res.data
        })
        console.log(res)
      })
      .catch( (err) => console.log(err))
  }

  componentDidMount() {
    this.handleUser();
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  display = () => {
    return (
      <div>
        <h1>Hello from Home Component</h1>
        <p>Logged In Status: {this.state.isLoggedIn ? "Logged IN" : "Not Logged In"}</p>
        <p>Username: {this.state.user.username}</p>
    </div>
    )  
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? 
        this.display() : 
        <Link to='/login'>Login</Link> }
      </div>
    ) 
  }
  
}

export default Home;