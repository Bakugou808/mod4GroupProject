import React from 'react';
import Login from './components/Login'
import { api } from "./services/api";
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, Navlink, Link } from "react-router-dom";



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
    if (token) {
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
    const updatedState = { ...this.state.auth, user: {id: data.id,  username: data.username} };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  }
  
  render() {
    return (
      <div>

          <Route exact path="/signup" render={props => <Signup {...props} onSignup={this.login}/>} />
          <Route exact path="/login" render={props => <Login {...props} onLogin={this.login} />}/>
            
      </div>
    );
  }
  
}

export default App;
