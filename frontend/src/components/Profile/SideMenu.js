import React, { Component } from 'react'
import { Route, Navlink, Link } from "react-router-dom";
import { api } from '../../services/api'
import Search from './Search'

export default class SideMenu extends Component {


    render() {
        const {match} = this.props
        return (
            <div className="sideMenu">
                <Link to={`${match.url}`}>Home</Link>
                <br/>
                <Link to={`${match.url}/search`}>Search</Link>
                <br/>
                <Link to={`${match.url}/addMedia`}>+</Link>
                <br/>
                <Link to={`${match.url}/activity`}>Heart</Link>
                <br/>
                <Link to={`${match.url}/gallery`}>Gallery</Link>
                <br/>
                <Link to={`${match.url}/stats`}>Stats</Link>
                <br/>

            </div>
        )
    }
}
