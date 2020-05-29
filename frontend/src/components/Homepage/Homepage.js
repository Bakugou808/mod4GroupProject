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
            <ul class="list-group flex-fill">
                    <Link to={`/profiles/${profile.id}`} style={{textDecoration: 'none'}} className='profile_link'><li class="list-group-item"> {profile.username} </li></Link>
                </ul>
                
            )
        )
    }


    render() {
        const {user, onLogout, match} = this.props
        const {name, profiles} = this.props.user
        return (
            
            <div className="container">
                <h2 className="mt-3">{name && `${name}'s Profiles`}</h2>
                <div className="row mt-5">
                    <div className="col-2">
                        {profiles && this.renderProfiles()}
                    </div>
                    <div className="col-1"></div>
                    <div className="col-9">
                        <h3 className="text-info">New Profile:</h3>
                        <ProfileForm key={user.id} user={user}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthHOC(Homepage)