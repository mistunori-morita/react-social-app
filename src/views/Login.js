import React, { Component } from 'react'
import './index.css';

class Login extends Component {
  render(){
    return(
      <div className="Login">
        <div className="Login-box">
            <button id="facebook">Facebook</button>
            <button id="google">Google</button>
        </div>
      </div>
    );
  }
}

export default Login;