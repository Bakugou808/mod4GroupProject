import React, { Component } from 'react'
import axios from 'axios'

export default class AddMedia extends Component {

    state = {
        selectedFile: [],
        caption: "", 
        post: ""
    }

    handleCaption = (event) => {
        this.setState({caption: event.target.value})
    }
    

    selectedFileHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})


    }
    
     fileUploadHandler = async (event) => {
        event.preventDefault()
        const API_ROOT = (path)=> `http://localhost:3000${path}`
        
        let id = this.props.match.url.split('/')[2]

        let data = new FormData()
        data.append('photo', this.state.selectedFile)
        data.append('profile_id', id)
        data.append('caption', this.state.caption)

        let res = await axios.post(API_ROOT(`/posts`), data)

        this.setState({post: res})
}


    render() {
        return (
            <div>
                <form onSubmit={this.fileUploadHandler}>
                    <label>Add Media</label>
                    <input type="file" name="media_file" onChange={this.selectedFileHandler}/>
                    {/* <button onClick={this.fileUploadHandler} >Upload Media</button> */}
                    <label>Add Caption</label>
                    <input type="text" value={this.state.caption} name="caption" onChange={this.handleCaption}/>
                    <button type="submit">Submit Post</button>
                </form>
                <div>
                    {this.state.post && <img src={this.state.post.data.img_url} /> }
                </div>
            </div>
        )
    }
}
