import React from "react";
import axios from 'axios';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      inputValue: "",
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
    const { username, password } = this.state;
    axios
      .post("/login", {
        user: {
          username: username,
          password: password
        }
      }, { withCredentials: true })
      .then((res) => {
        console.log("Register user")
      })
      .catch((error) => console.log(error))
  }

  render () {
    return (
      <div>
        <h1>Login Form</h1>
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
      </div>
    )
  } 
}

export default Login;