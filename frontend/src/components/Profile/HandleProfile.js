import React, { Component } from 'react'
import { api } from '../../services/api'
import './HandleProfile.scss'
import { Route, Link, withRouter } from "react-router-dom";


class HandleProfile extends Component {

    handleClick = () => {
        const {profile, match, userProfileID} = this.props
        if (profile.id != userProfileID){
            this.props.history.push(`${match.url}/view/${profile.id}`)
            // this.props.history.push(`${profile.id}/gallery`)
        } else {
            this.props.history.push(`${match.url}/gallery`)
        }
        
    }

    render() {
        const {profile, match} = this.props
        return (

            <div>
                <div className="gallery">
                   <img className="profile-img" onClick={this.handleClick} style={{marginBottom: '1vh', width: 50, height: 50, borderRadius: '20%', border: 'none'}} src={this.props.profile.img_file} />
                   <span className='hidden'>{profile.username}</span>
                </div>
            </div>
        )
    }
}

export default withRouter(HandleProfile)