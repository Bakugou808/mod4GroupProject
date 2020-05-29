import React, { Component, Fragment } from 'react'
import { Route, Navlink, Link, withRouter } from "react-router-dom";

class Navbar extends Component {

    state = {
        flag: true
    }

    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        this.props.history.push("/")
    }

    handleClick = () => {
        if(this.state.flag){
            this.props.onClick('active')
            this.setState({flag: false})
        } else {
            this.props.onClick('')
            this.setState({flag: true})
        }
    }

    handleClickForUser = () => {
        this.props.history.push(`/profiles/${this.props.user.id}/gallery`)
    }

    render() {
        const username = this.props.profile.username
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <button onClick={this.handleClick} type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                    </button>
                </div>
               <Link className="navbar-brand ml-1" to="/">
                  Instaclone
               </Link> 
                { this.props.user.name? <div onClick={this.handleClickForUser} className="gallery mx-auto">
                   <img style={{width: 50, height: 50, borderRadius: '50%'}} src={this.props.profile.img_file} />
                </div> : null 
                }
                <div>
                {username && `${username}'s Profile`}
                {
                    this.props.user.name ? <button className="ml-3 mb-1 option btn btn-outline-danger" onClick={this.onLogout}>SIGN OUT</button> : null
                }           
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)