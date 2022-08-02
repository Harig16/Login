import React from "react";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
      },
      inputValue: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <h1>Login Form</h1>
        <div>
          <label>Username: </label>
          <input 
            type="text"
            name="user['username']"
            value={this.state.username}
            onChange={this.inputHandler}
          />
          <label>Password: </label>
          <input 
            type="password"
            name="user['password']"
            value={this.state.password}
            onChange={this.inputHandler}
          />
          <button type="submit">Login</button>
        </div>
      </div>
    )
  } 
}

export default Login;