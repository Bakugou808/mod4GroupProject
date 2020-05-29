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
                <div className="gallery">
                   <img onClick={this.handleClick} style={{marginBottom: '1vh', width: 50, height: 50, borderRadius: '20%', border: 'none'}} src={this.props.profile.img_file} />
                </div>
            </div>
        )
    }
}

export default withRouter(HandleProfile)