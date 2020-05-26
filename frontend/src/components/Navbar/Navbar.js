import React, { Component, Fragment } from 'react'
import { Route, Navlink, Link, withRouter } from "react-router-dom";
import './Navbar.scss'

class Navbar extends Component {

    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        this.props.history.push("/")
    }

    render() {
        console.log(this.props)
        return (
            <nav className="nav">
               <Link className="logo-container" to="/">
                   {/* put logo here  */}
                   logo img
               </Link>
                { this.props.user.name? <Link to="/gallery" className="gallery">
                    profile img
                </Link> : null 
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