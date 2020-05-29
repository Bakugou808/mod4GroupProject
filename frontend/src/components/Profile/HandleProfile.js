import React, { Component } from 'react'
import { api } from '../../services/api'
import { Route, Link, withRouter } from "react-router-dom";


class HandleProfile extends Component {

    handleClick = () => {
        const {profile, match, userProfileID} = this.props
        if (profile.id != userProfileID){
            this.props.history.push(`${match.url}/view/${profile.id}`)
        } else {
            this.props.history.push(`${match.url}/gallery`)
        }
        
    }

    render() {
        const {profile, match} = this.props
        return (

            <div>
                <div className="gallery mx-auto">
                   <img onClick={this.handleClick} style={{width: 50, height: 50, borderRadius: '35%'}} src={this.props.profile.img_file} />
                   <div onClick={this.handleClick}>{profile.username}</div>
                   
                </div>
            </div>
        )
    }
}

export default withRouter(HandleProfile)