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
                <div className="gallery mx-auto">
                   <img onClick={this.handleClick} style={{width: 50, height: 50, borderRadius: '35%'}} src={this.props.profile.img_file} />
                </div>
            </div>
        )
    }
}

export default withRouter(HandleProfile)