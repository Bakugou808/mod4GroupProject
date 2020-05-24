import React, { Component } from 'react'
import { api } from '../services/api';


export default class Signup extends Component {

    state = {
        error: false,
        fields: {
          email: '',
          password_digest: '',
          confirmedPassword: '',
          name: '',
          birthday: '', 
          location: ''
        }
    }

    handleChange = e => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {password_digest, confirmedPassword} = this.state.fields
        if (confirmedPassword === password_digest) {
            api.auth.signup(this.state.fields).then(res => {
                if (!res.error) {
                  // const updatedState = { ...this.state.auth, user: res };
                  this.props.onSignup(res);
                  this.props.history.push('/');
                } else {
                  this.setState({ error: true });
                }
              });
        } else {
            alert("passwords do not match")
        }
        
    };
    

    render() {
        const {name, birthday, email, password_digest, location, confirmedPassword} = this.state.fields
        return (
        <div>
            {this.state.error ? <h1>Try again...</h1> : null}
           <form className="signup-form" onSubmit = {this.handleSubmit}>
               <label>Name</label>
               <input type="name" name="name" value={name} required onChange={this.handleChange}/>
               <label>Email</label>
               <input type="email" name="email" value={email} required onChange={this.handleChange}/>
               <label>Birthday</label>
               <input type="text" name="birthday" value={birthday} required onChange={this.handleChange}/>
               <label>Location</label>
               <input type="text" name="location" value={location} required onChange={this.handleChange}/>
               <label>Password</label>
               <input type="password" name="password_digest" value={password_digest} required onChange={this.handleChange}/>
               <label>Verify Password</label>
               <input type="password" name="confirmedPassword" value={confirmedPassword} required onChange={this.handleChange}/>
               
               <button type="submit">Login</button>
           </form>
       </div>
        )
    }
}
