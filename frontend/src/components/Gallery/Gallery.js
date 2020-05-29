import React, { Component, Fragment } from 'react'
import { api } from '../../services/api'
import PostContainer from '../Posts/PostContainer'

export default class Gallery extends Component {

    state = {
        posts: [],
        followers: [],
        following: [],
        profile: null
    }
    
    deletePost = (postID) => {
        api.posts.deletePost(postID)
        this.setState(prev => ({posts: prev.posts.filter(post => post.id != postID)}))

    }

    componentDidMount(){
        let id = this.props.userProfileID
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
        api.profile.getProfile(id).then(profile => this.setState({profile: profile, followers: profile.followers}))
        api.followers.getFollowing(id).then(following => this.setState({following: following}))
    }

    renderProfile = () => {
        const {profile, followers, following} = this.state

        return <Fragment> 
            <img src={profile.img_file}></img>
            <h2>{followers.length} Followers </h2>
            <h2>{following.length} Following</h2>
            <h3>{profile.username}</h3>
        </Fragment>
        
    }

    renderPosts = () => {
        const {posts} = this.state
        const {userProfileID} = this.props 

        return posts.map(post => {
            return (
                <div className="col-md my-3">

                    <PostContainer width="301px" key={post.id} post={post} userProfileID={userProfileID} deletePost={this.deletePost} /> 
                </div>
                )
        })
    }
    

    render() {
        const {profile} = this.state 
        return (
            <Fragment> 
                {profile && this.renderProfile()}
                <div className="container">
                    <div className="row">
                        {this.renderPosts()}
                    </div>
                </div>
            </Fragment>
           
        )
    }
}
