import React, { Component } from 'react'
import { api } from '../../services/api'

export default class Gallery extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        let id = this.props.match.url.split('/')[2]
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                {/* <Post key={i} {...post} />*/}
                {this.state.posts.map(post =>  <img style={{width: 300, height: 300}} src={post.img_url} /> )}
            </div>
        )
    }
}
