import React from 'react';
import './App.css'
import Login from './components/LoginSignup/Login'
import { api } from "./services/api";
import Signup from './components/LoginSignup/Signup'
import { Route, Navlink, Link, Switch } from "react-router-dom";
import Gallery from './components/Gallery/Gallery'

import Landingpage from './components/LandingPage/Landingpage'
import Homepage from './components/Homepage/Homepage'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      auth: {
        user: {}
      }
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    // console.log(token)
    
    if (token != 'undefined') {
      // console.log('there is a token');
      // make a request to the backend and find our user
      api.auth.getCurrentUser().then(user => {
        // console.log(user)
        const updatedState = { ...this.state.auth, user: {...user} };
        this.setState({ auth: updatedState });
      });
    }
  }
  
  login = (data) => {
    
    console.log(data)
    const updatedState = { ...this.state.auth, user: {...data} };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  }
 
  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };
  
  render() {
    const {user} = this.state.auth
    const {profiles} = user
    return (
      <div>
          <Navbar user={this.state.auth.user} onLogout={this.logout} />
            <Route exact path="/" render={props => <Landingpage {...props} onSignup={this.login} onLogin={this.login}/> } />
            <Route exact path='/home' render={props => <Homepage {...props} user={user} onLogout={this.logout} />}/>
            <Route exact path='/gallery' render={props => <Gallery {...props} user={user} /> } />
            <Route path={`/profiles/:id`}  render={props => <Profile {...props}/>} />
            
      </div>
    );
  }
  
}

export default App;
