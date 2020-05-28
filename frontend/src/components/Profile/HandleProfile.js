import React, { Component } from 'react'
import { api } from '../../services/api'
import { Route, Link } from "react-router-dom";


export default class HandleProfile extends Component {


    render() {
        const {profile, match} = this.props
        return (
            <div>
                {/* <div onClick={this.handleViewProfile}>{profile.img_file}</div> */}
                
                    <Link to={`${match.url}/view/${profile.id}`}>{profile.img_file}----{profile.username}</Link>
                {/* <Route path={`${match}/view/:viewProfileId`}  render={props => <Profile {...props} />} /> */}
            </div>
        )
    }
}
