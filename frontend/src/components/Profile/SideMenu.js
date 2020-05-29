import React, { Component } from 'react'
import { Route, Navlink, Link } from "react-router-dom";
import { api } from '../../services/api'
import './Sidemenu.scss'
import Search from './Search'

export default class SideMenu extends Component {


    render() {
        const {match} = this.props
        return (
            <div id="sidebar" className={this.props.class}>
                <Link className="top" to={`${match.url}`}>Home</Link>
                {/* <Link to={`/home`}>Home</Link> */}

                <br/>
                <Link to={`${match.url}/search`}>Search</Link>
                <br/>
                <Link className="plus" to={`${match.url}/addMedia`}>+</Link>
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
