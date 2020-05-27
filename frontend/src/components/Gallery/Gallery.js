import React, { Component } from 'react'
import { api } from '../../services/api'
import PostContainer from '../Posts/PostContainer'

export default class Gallery extends Component {

    state = {
        posts: [],
    }
    
    deletePost = (postID) => {
        api.posts.deletePost(postID)
        this.setState(prev => ({posts: prev.posts.filter(post => post.id != postID)}))
    }

    componentDidMount(){
        let id = this.props.match.url.split('/')[2]
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
    }

    renderPosts = () => {
        const {posts} = this.state
        return posts.map(post => <PostContainer key={post.id} post={post} deletePost={this.deletePost} /> )
    }
    

    render() {
        console.log(this.state.posts)
        return (
            <div>
// Janu
//                 {this.renderPosts()}

                {/* <Post key={i} {...post} />*/}
                {this.state.posts.map(post =>  <img style={{width: 300, height: 300}} src={post.img_url} /> )}

            </div>
        )
    }
}
