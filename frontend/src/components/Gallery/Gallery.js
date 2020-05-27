import React, { Component } from 'react'
import { api } from '../../services/api'
import PostContainer from '../Posts/PostContainer'

export default class Gallery extends Component {

    state = {
        posts: [],
    }

    refreshMount = () => {
        this.componentDidMount()
    }
    

    componentDidMount(){
        let id = this.props.match.url.split('/')[2]
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
    }

    renderPosts = () => {
        const {posts} = this.state
        return posts.map(post => <PostContainer key={post.id} post={post} refreshMount={this.refreshMount}/> )
    }
    

    render() {
        console.log(this.state.posts)
        return (
            <div>
             {this.renderPosts()}
            </div>
        )
    }
}
