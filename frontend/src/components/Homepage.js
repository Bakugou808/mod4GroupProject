import React, { Component, Fragment } from 'react'
import AuthHOC from "../HOCs/AuthHOC";
import { api } from '../services/api';
import Navbar from "./Navbar";
import { RouterBrowser as Router, Route, Navlink, Link, Switch } from "react-router-dom";
import Profile from './Profile'
import ProfileList from './ProfileList'


class Homepage extends Component {

    state = {
        profiles: []
    }

    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        this.props.history.push("/")
    }

    renderProfiles = () => {
        const {profiles} = this.props.user 
        
        return profiles.map(profile =>  (
                <Fragment>
                    <div><Link to={`/profiles/${profile.id}`} className='profile_link'> {profile.username} </Link></div> 
                </Fragment>
                
            )
        )
    }


    renderProfileRoutes = () => {
        const {profiles} = this.props.user 
        
        return profiles.map(profile =>  (
        <Route exact path={`/home/:profileID`} render={props => <Profile {...props} profile={profile} />}   />
            )
        )
    }
    

    render() {
        const {user, onLogout, match} = this.props
        const {name, profiles} = this.props.user
        return (
            
            <div>
                <Navbar  user={user} onLogout={onLogout} />
                {name && `Welcome To the homepage ${name}`}
                <button type="button" onClick={this.onLogout}>Logout</button>
                <br></br>
                <br></br>
                <div>
                {profiles && this.renderProfiles()}
                </div>

            </div>
        )
    }
}

export default AuthHOC(Homepage)