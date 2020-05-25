import React, { Component } from 'react'
import AuthHOC from "../HOCs/AuthHOC";
import { api } from '../services/api';


class Homepage extends Component {

    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        this.props.history.push("/")
    }
    

    render() {
        
        const {user} = this.props.user
        const {name} = user
        return (
            
            <div>
                {name && `Welcome To the homepage ${name}`}
                <button type="button" onClick={this.onLogout}>Logout</button>
            </div>
        )
    }
}

export default AuthHOC(Homepage)