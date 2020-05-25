import React, { Component, Fragment } from 'react'
import { Route, Navlink, Link } from "react-router-dom";

export default class Navbar extends Component {

    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        this.props.history.push("/")
    }

    render() {
        return (
            <Fragment>
                <div>
                    This is a Navbar
                    <Link to="/gallery" className="gallery"> profile img</Link>
                </div>
                <div>
                </div>
            </Fragment>

        )
    }
}
