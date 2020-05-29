import React, { Component } from 'react'
import axios from 'axios'
import { Route, Navlink, Link, withRouter } from "react-router-dom";


 class ProfileForm extends Component {
    constructor() {
        super()
        
        this.state = {
            userName: '',
            description: '',
            img_file: [],
            profile: ''
        }
    }

    changeHandler = event => {
        let {name, value} = event.target
        this.setState({[name]: value})
    }

    selectedFileHandler = (event) => {
        this.setState({img_file: event.target.files[0]})
    }

    handleSubmit = async event => {
        event.preventDefault()
        // post call?
        const API_ROOT = (path)=> `http://localhost:3000${path}`
        let id = this.props.user.id
        let data = new FormData()
        data.append('user_id', id)
        data.append('username', this.state.userName)
        data.append('description', this.state.description)
        data.append('avatar', this.state.img_file) 
        let res = await axios.post(API_ROOT(`/profiles`), data)
        this.setState({profile: res})
        window.location.reload()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Enter your user name:</label>
                        <input className="form-control"
                            type="text" 
                            name="userName" 
                            value={this.state.userName} 
                            onChange={this.changeHandler} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter your description:</label>
                        <input className="form-control"
                            type="text" 
                            name="description" 
                            value={this.state.description} 
                            onChange={this.changeHandler} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Select your profile pic:</label>
                        <input className="form-control-file" 
                            type="file"
                            name="img_file" 
                            onChange={this.selectedFileHandler}
                        />
                    </div>
                    <button className="btn btn-info" type="submit">Make Profile</button>
                </form>
                <div>
                    {this.state.profile && <img src={this.state.profile.data.img_file} /> }
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileForm)