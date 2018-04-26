import React, { Component } from 'react'
import './index.css';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      profileImage: '',
      fullName: ''
    }
  }
  componentWillMount(){
    let fbData = JSON.parse(localStorage.getItem('fbData'));
    let googleData = JSON.parse(localStorage.getItem('googleData'));

    if(fbData){
      this.setState({
        profileImage: fbData.picture,
        fullName: fbData.name
      })
    }else if(googleData){
      this.setState({
        profileImage: googleData.picture,
        fullName: googleData.name
      })
    }
    console.log(fbData)
    console.log(googleData)
  }
  render(){
    console.log(this.state.profileImage)
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="" className="brand-logo left">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>{this.state.fullName }</li>
            </ul>
            <img className="circle Home-avatar" src={this.state.profileImage}/>
          </div>
        </nav>

      </div>
    );
  }
}

export default Home;
