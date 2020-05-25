import React from 'react';
import Login from './components/Login'
import { api } from "./services/api";
import Signup from './components/Signup'
import { Route, Navlink, Link } from "react-router-dom";

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
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ auth: updatedState });
      });
    }
  }
  
  login = (data) => {
    debugger
    const updatedState = { ...this.state.auth, user: {id: data.id,  email: data.email, userInfo: data.user} };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };
  
  render() {
    return (
      <div>
          {/* <Link className="signup" to='/signup'>Signup</Link>
          <br></br>
          <Link className="login" to='/login'>Login</Link> */}

          <Route exact path="/" render={props => <Landingpage {...props} onSignup={this.login} onLogin={this.login}/> } />
          {/* <Signup {...props} onSignup={this.login}/> */}
          <Route exact path='/home' render={props => <Homepage {...props} user={this.state.auth.user} onLogout={this.logout} />}/>
          
          {/* <Route exact path="/signup" render={props => <Signup {...props} onSignup={this.login}/>} />
          <Route exact path="/login" render={props => <Login {...props} onLogin={this.login} />}/> */}
            
      </div>
    );
  }
  
}

export default App;
