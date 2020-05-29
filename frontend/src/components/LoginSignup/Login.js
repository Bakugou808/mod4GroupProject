import React, { Component } from 'react'
import { api } from '../../services/api';

export default class Login extends Component {

    state = {
        error: false,
        fields: {
          email: '',
          password: ''
        }
    }

    handleChange = e => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    };

    handleSubmit = e => {
        e.preventDefault();
        api.auth.login(this.state.fields).then(res => {
          if (!res.error) {
            // const updatedState = { ...this.state.auth, user: res };
            this.props.onLogin(res);
            this.props.history.push('/profiles');
          } else {
            this.setState({ error: true });
          }
        });
    };f
    
    

    render() {
        const {email, password} = this.state.fields
        return (
            <div>
                 {this.state.error ? <h1>Try again...</h1> : null}
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control" type="email" name="email" value={email} required onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" name="password" value={password} required onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-info" type="submit">Login</button>
                </form>
            </div>
        )
    }
}
