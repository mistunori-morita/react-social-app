import React, { Component } from 'react'
import './index.css';
import { Redirect } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      profileImage: '',
      fullName: '',
      isLogout: false
    }
    this.onLogout = this.onLogout.bind(this);
  }

  componentWillMount() {
    let fbData = JSON.parse(localStorage.getItem('fbData'));
    let googleData = JSON.parse(localStorage.getItem('googleData'));


    if(!fbData && !googleData){
      this.setState({
        isLogout: true
      })
    }

    if (fbData) {
      this.setState({
        profileImage: fbData.picture,
        fullName: fbData.name
      })
    } else if (googleData) {
      this.setState({
        profileImage: googleData.picture,
        fullName: googleData.name
      })
    }
    console.log(fbData)
    console.log(googleData)
  }

  onLogout(e){
    //localStrageの削除
    localStorage.clear();
    this.setState({
      isLogout: true
    })
  }

  render() {
    //localStorageがあるかないかで分ける
    if(this.state.isLogout){
      return(<Redirect to="/"/>);
    }

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="" className="brand-logo left">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>{this.state.fullName}</li>
              <li><img className="circle Home-avatar" src={this.state.profileImage} />
              </li>
              <li><i onClick={ this.onLogout }className="Home-logout fa fa-power-off"></i></li>
            </ul>
          </div>
        </nav>

      </div>
    );
  }
}

export default Home;
