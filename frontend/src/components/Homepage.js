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

    componentDidMount() {

    }
    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        this.props.history.push("/")
    }

    renderProfiles = () => {
        const {profiles} = this.props.user 
        
        return profiles.map(profile =>  (
                <div><Link to={`/home/${profile.username}`} className='profile_link'> {profile.username} </Link></div> 
                
            )
        )
    }


    renderProfileRoutes = () => {
        const {profiles} = this.props.user 
        
        return profiles.map(profile =>  (
        <Route exact path={`/home/:username`} render={props => <Profile {...props} profile={profile} />}   />
            )
        )
    }
    // 

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
                {/* <div>
                    {profiles && <ProfileList profiles={profiles} />} 
                </div> */}
               
                {/* {profiles && this.renderProfileRoutes()} */}
                <Route path={`${match.url}/:username`} render={() => <h3>Choose a movie from the list above</h3>}    />
                <Route path={`/profiles/:username`}  render={() => <h3>Choose a movie from the list above</h3>} />
                {/* render={props => <Profile {...props} profiles={profiles} />}  */}
                {/* render={props => <Profile {...props} profiles={profiles} />} */}

                {/* <Switch>
                    <Route path={`${match.url}/:username`}>
                        <Profile  profiles={profiles} />} 
                    </Route>

                </Switch> */}
            </div>
        )
    }
}

export default AuthHOC(Homepage)