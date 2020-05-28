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
        let id = this.props.userProfileID
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
    }

    renderPosts = () => {
        const {posts} = this.state
        const {userProfileID} = this.props 

        return posts.map(post => {
            return (
                <div className="col-md my-3">
                    <PostContainer key={post.id} post={post} userProfileID={userProfileID} deletePost={this.deletePost} /> 
                </div>
                )
        })
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}
