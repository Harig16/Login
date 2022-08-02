import React from "react";
import { Navigate } from "react-router-dom";

const Home = (props) => {

  if(props.isLogged ===  "Not_Logged_in") {
    return <Navigate to="/login" replace={true} />
  }

  return (
    <div>
      <h1>Hello from Home Component</h1>
      <p>Logged In Status: {props.isLogged}</p>
    </div>
  )
}

export default Home;