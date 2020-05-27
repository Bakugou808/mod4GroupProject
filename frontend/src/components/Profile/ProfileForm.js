import React, { Component } from 'react'

export default class ProfileForm extends Component {
    constructor() {
        super()
        
        this.state = {
            userName: '',
            description: '',
            img_file: '',
        }
    }

    // import selected filehandler
    // import fileUploadHandler? 
    // where should we put this component? in profile?
    
    changeHandler = event => {
        let {name, value} = event
        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault()
        // post call?
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your user name:</label>
                    <input type="text" 
                        name="userName" 
                        value={this.state.userName} 
                        onChange={this.changeHandler} 
                    />
                    <label>Enter your description:</label>
                    <input type="text" 
                        name="description" 
                        value={this.state.description} 
                        onChange={this.changeHandler} 
                    />
                    <label>Select your profile pic:</label>
                    <input type="file"
                        name="img_file" 
                        onChange={this.selectedFileHandler}
                    />
                    <button type="submit">Make Profile</button>
                </form>
            </div>
        )
    }
}
