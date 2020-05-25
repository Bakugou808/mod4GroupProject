import React, { Component } from 'react'
import { RouterBrowser as Router, Route, Navlink, Link } from "react-router-dom";


class ProfileList extends Component {

    renderProfiles = () => {

        
        const {profiles} = this.props 
        
        return profiles.map(profile =>  (
                <Link to={`/profiles/${profile.username}`} className='profile_link'> {profile.username} </Link> 
                
            )
        )
    }

    render() {
        return (
            <div>
                {this.renderProfiles()}
            </div>
        )
    }
}
export default ProfileList 