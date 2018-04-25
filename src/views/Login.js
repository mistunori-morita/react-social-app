import React, { Component } from 'react'
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import FacebookLogin from 'react-facebook-login'


class Login extends Component {
  constructor() {
    super();
    this.responseFacebook = this.responseFacebook.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  responseFacebook(response){

  }
  onFailure(error){

  }
  render() {
    return (
      <div className="Login">
        <div className="Login-box">
          <div className="card">
            <div className="card-content">
            <FacebookLogin 
                appId=""
              autoload= {false}
              fields="name, email, picuture.width(120)"
              callback={ this.responseFacebook}
              onFailure={this.onFailure}
              textButton="Facebook"
                cssClass="waves-effect waves-light btn blue accent-3"
                icon="fab fa-facebook-f"
            />
       
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