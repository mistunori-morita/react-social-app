import React, { Component } from 'react'
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import GoogleLogin from 'react-google-login'
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
    this.responseGoogle = this.responseGoogle.bind(this)
    this.onFailure = this.onFailure.bind(this);
  }

  componentWillMount(){
    if(localStorage.getItem("fbData") || localStorage.getItem("googleData")){
      this.setState({
        isLogged: true
      })
    }
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
  responseGoogle(response){
    console.log(response);
    localStorage.setItem("googleData", JSON.stringify({
      token: response.token,
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
      social: 'google'
    }));
    this.setState({
      isLogged: true
    })
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

              <GoogleLogin 
                clientId="334458494718-q8ne0lf78digc4ldtojqgluivts2g9da.apps.googleusercontent.com"
                autoload={ false }
                onSuccess={ this.responseGoogle }
                onFailure={this.onFailure}
                className="waves-effect waves-light btn red lighten-1">
                <i className="fab fa-google"></i>
                <span>Inciar Sesion</span>
              </GoogleLogin>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;