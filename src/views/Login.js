import React, { Component } from 'react'
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import FacebookLogin from 'react-facebook-login'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      isLogged: false,
      social: ''
    }

    this.responseFacebook = this.responseFacebook.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  responseFacebook(response) {
    console.log(response)
    localStorage.setItem("fbData", JSON.stringify({
      token: response.token,
      email: response.email,
      name: response.name,
      picture: response.picture.data.url,
      social: 'fb'
    }));
    this.setState({
      isLogged: true
    });
  }

  onFailure(error) {
    console.log(error)
  }

  render() {
    if(this.state.isLogged){
      return(<Redirect to="/Home/" />);
    }
    return (
      <div className="Login">
        <div className="Login-box">
          <div className="card">
            <div className="card-content">
              <FacebookLogin
                appId="357217358124000"
                autoload={false}
                fields="name, email, picture.width(120)"
                callback={this.responseFacebook}
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