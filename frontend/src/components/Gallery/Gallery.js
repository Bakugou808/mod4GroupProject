import React, { Component, Fragment } from 'react'
import { api } from '../../services/api'
import './Gallery.scss'
import PostContainer from '../Posts/PostContainer'

export default class Gallery extends Component {

    state = {
        posts: [],
        followers: [],
        following: [],
        profile: null,
        display: true
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

        return <div className="top-gallery"> 
            <img className="image-gallery" src={profile.img_file}></img>
            <h2>{profile.username}</h2>
            <h5 onClick={this.handleAddFollower}>{followers.length} Followers | {following.length} following</h5>
            
        </div>
        
    }

    handleClick = () => {
        if(this.state.display){
            this.setState({display: false})
            return 'none'
        } else {
            this.setState({display: true}) 
            return ''
        }
    }

    renderPosts = () => {
        const {posts} = this.state
        const {userProfileID} = this.props 

        return posts.map(post => {
            return (
                <div className="col-md my-3">

                    <PostContainer handleClick={this.handleClick} width="301px" key={post.id} post={post} userProfileID={userProfileID} deletePost={this.deletePost} /> 
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
