import React, { Component } from 'react'
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-box">
          <div className="card">
            <div className="card-content">
              <button className="waves-effect waves-light btn blue accent-3" id="facebook">Facebook<i className="fab fa-facebook-f"></i>
              </button>
              <button className="waves-effect waves-light btn red lighten-1" id="google">Google<i className="fab fa-google"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;