import React, { Component, Fragment } from 'react'
import { Route, Navlink, Link, withRouter } from "react-router-dom";
import './Navbar.scss'

class Navbar extends Component {

    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        this.props.history.push("/")
    }

    handleClick = event => {
        this.props.history.push(`/profiles/${this.props.user.id}/gallery`)
    }

    render() {
        return (
            <nav className="nav">
               <Link className="logo-container" to="/">
                   {/* put logo here  */}
                   logo img
               </Link> 
                { this.props.user.name? <div onClick={this.handleClick} className="gallery">
                   <img style={{width: 50, height: 50, borderRadius: '50%'}} src={this.props.user.profiles[0]['img_file']} />
                </div> : null 
                }
                <div className="options">
                {
                    this.props.user.name ? <div className="option" onClick={this.onLogout}>SIGN OUT</div> : null
                }           
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)