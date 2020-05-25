import React, { Component } from 'react'
import { api } from '../services/api';


export default class Signup extends Component {

    state = {
        error: false,
        fields: {
          email: '',
          password: '',
          password_confirmation: '',
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
        const {password, password_confirmation} = this.state.fields
        if (password_confirmation === password) {
            api.auth.signup(this.state.fields).then(res => {
                if (!res.error) {
                  // const updatedState = { ...this.state.auth, user: res };
                  this.props.onSignup(res);
                  this.props.history.push('/home');
                } else {
                  this.setState({ error: true });
                }
              });
        } else {
            alert("passwords do not match")
        }
        
    };
    

    render() {
        const {name, birthday, email, password, location, password_confirmation} = this.state.fields
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
               {/* <label>Location</label>
               <input type="text" name="location" value={location} required onChange={this.handleChange}/> */}
               <label>Password</label>
               <input type="password" name="password" value={password} required onChange={this.handleChange}/>
               <label>Verify Password</label>
               <input type="password" name="password_confirmation" value={password_confirmation} required onChange={this.handleChange}/>
               
               <button type="submit">Signup</button>
           </form>
       </div>
        )
    }
}
