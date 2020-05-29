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
            <div className="container">
                <form style={{marginTop: '15vh'}} onSubmit={this.fileUploadHandler}>
                    <div class="form-group">
                        <label>Add Media</label>
                        <input className="form-control-file" type="file" name="media_file" onChange={this.selectedFileHandler}/>
                    </div>
                    {/* <button onClick={this.fileUploadHandler} >Upload Media</button> */}
                    <div class="form-group">
                        <label>Add Caption</label>
                        <input className="form-control" type="text" value={this.state.caption} name="caption" onChange={this.handleCaption}/>
                    </div>
                    <button className="btn btn-info" type="submit">Submit Post</button>
                </form>
                <div>
                    {this.state.post && <img src={this.state.post.data.img_url} /> }
                </div>
            </div>
        )
    }
}
