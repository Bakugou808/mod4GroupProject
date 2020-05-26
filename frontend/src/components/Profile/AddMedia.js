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
    
    fileUploadHandler = () => {
        const API_ROOT = (path)=> `http://localhost:3000${path}`
        let id = this.props.match.url.split('/')[2]
        const fd = {media_file: this.state.selectedFile, profile_id: id, caption: this.state.caption}

        let data = new FormData()
        data.append('media_file', this.state.selectedFile)
        data.append('profile_id', id)
        data.append('caption', this.state.caption)

        axios.post(API_ROOT(`/posts`), data).then(res => res.json()).then(res => this.setState({post: res}))
        // .then(data => console.log(data))
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
                    {this.state.post && <img src={this.state.post} />}
                </div>
            </div>
        )
    }
}
