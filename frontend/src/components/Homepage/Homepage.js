import React, { Component, Fragment } from 'react'
import AuthHOC from "../HOCs/AuthHOC";
import { api } from '../../services/api';
import Navbar from "../Navbar/Navbar";
import { RouterBrowser as Router, Route, Navlink, Link, Switch } from "react-router-dom";
import Profile from '../Profile/Profile'
import ProfileList from '../Profile/ProfileList'
import ProfileForm from '../Profile/ProfileForm'




class Homepage extends Component {

    state = {
        profiles: [],
        
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


    render() {
        const {user, onLogout, match} = this.props
        const {name, profiles} = this.props.user
        return (
            
            <div>
                <ProfileForm key={user.id} user={user}/>
                {name && `Welcome To the homepage ${name}`}
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