import React, { Component } from 'react'
import { api } from '../../services/api'
import { Route, Link, withRouter } from "react-router-dom";


class HandleProfile extends Component {

    handleClick = () => {
        this.props.history.push(`${this.props.profile.id}/gallery`)
    }

    render() {
        const {profile, match} = this.props
        return (
            <div>
                {/* <div onClick={this.handleViewProfile}>{profile.img_file}</div> */}
                <div className="gallery mx-auto">
                   <img onClick={this.handleClick} style={{width: 50, height: 50, borderRadius: '35%'}} src={this.props.profile.img_file} />
                </div>
                {/* <Route path={`${match}/view/:viewProfileId`}  render={props => <Profile {...props} />} /> */}
            </div>
        )
    }
}

export default withRouter(HandleProfile)