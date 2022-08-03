import React from "react";
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      inputValue: "",
      errors: {},
      status: false,
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post("/login", {
        user: {
          username: username,
          password: password
        }
      }, { withCredentials: true })
      .then(res => {
        console.log("Login Componet", res)
        if(res.status === 200) {
          this.setState(
            {
              status: true,
            }
          )
        }
      })
      .catch((error) => console.log(error))
  }

  render () {
    return (
      <div>
        <h1>Login Form</h1>
        { this.state.status ? <Navigate to="/" replace={true} /> :
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Username: </label>
            <input 
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.inputHandler}
            />
            <label>Password: </label>
            <input 
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
            />
            <button 
            type="submit">Login</button>
          </form>
        </div>
      }
      </div>
    )
  } 
}

export default Login;