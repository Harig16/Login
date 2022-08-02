import React from "react";

const Home = (props) => {
  return (
    <div>
      <h1>Hello from Home Component</h1>
      <p>Logged In Status: {props.isLogged}</p>
    </div>
  )
}

export default Home;