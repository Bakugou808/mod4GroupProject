import React, { Component, Fragment } from 'react'
import { Route, Navlink, Link, withRouter } from "react-router-dom";

class Navbar extends Component {

    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        this.props.history.push("/")
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link className="navbar-brand" to="/">
                  Instaclone
               </Link> 
                { this.props.user.name? <div onClick={this.handleClick} className="gallery mx-auto">
                   <img style={{width: 50, height: 50, borderRadius: '50%'}} src={this.props.profile.img_file} />
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