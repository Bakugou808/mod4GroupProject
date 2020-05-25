import React from 'react';
import Login from './components/Login'
import { api } from "./services/api";
import Signup from './components/Signup'
import { Route, Navlink, Link } from "react-router-dom";
import Gallery from './components/Gallery'

import Landingpage from './components/Landingpage'
import Homepage from './components/Homepage'


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
    return (
      <div>

          <Route exact path="/" render={props => <Landingpage {...props} onSignup={this.login} onLogin={this.login}/> } />
          <Route exact path='/home' render={props => <Homepage {...props} user={user} onLogout={this.logout} />}/>
          <Route exact path='/gallery' render={props => <Gallery {...props} user={user} /> } />
          

            
      </div>
    );
  }
  
}

export default App;
