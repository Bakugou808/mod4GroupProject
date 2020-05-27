import React, { Component, Fragment } from 'react'
import { Route, Navlink, Link } from "react-router-dom";

import { api } from '../../services/api'
import SideMenu from './SideMenu'
import Search from './Search'
import Gallery from '../Gallery/Gallery'
import AddMedia from './AddMedia'
import Activity from './Activity'
import Stats from './Stats'



 class Profile extends Component {

    state = {
        profile: {}
    }

    componentDidMount(){
        api.profile.getCurrentProfile(this.props.match.params.id).then(profile => this.setState({profile: profile}))
    }


    
    render() {
        const {profile} = this.state
        const {username} = this.state.profile
        const {match} = this.props
        return (
          
            <Fragment> 
                <div>
                    {username && `${username}'s Profile`}
                </div>
                <div className="side_menu_div">
                    <SideMenu match={match}/> 
                </div>
                <Route exact path={`${match.url}/search`} render={(props) => <Search {...props}/>} />
                <Route exact path={`${match.url}/gallery`} render={props => <Gallery {...props} profile={profile} /> } />
                <Route exact path={`${match.url}/addMedia`} render={props => <AddMedia {...props} profile={profile} /> } />
                <Route exact path={`${match.url}/activity`} render={props => <Activity {...props} profile={profile} /> } />
                <Route exact path={`${match.url}/stats`} render={props => <Stats {...props} profile={profile} /> } />


            </Fragment>
         
         
            
        )
    }
}
export default Profile 
