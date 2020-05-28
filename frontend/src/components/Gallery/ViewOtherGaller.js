import React, { Component } from 'react'
import { api } from '../../services/api'
import PostContainer from '../Posts/PostContainer'

// 1. create home news feed 
//  - create flow => api library fetch => controller => model (query for recent posts) => send back to Home component => render posts with post components 
//  - add profile handler component to the posts within Home component (handler allows users to visit the poster's profile gallery)
//  - requires a new route link for the profile that is clicked 
// 2. create route for the profile handler components link tag use this viewOtherGallery component to fetch that profile's posts and render them
//  - set up proper route and link
//  - add a follow request button => add a follow api method => make a post request to follow controller with the current profiles id and the new profile => take id's from the url path 
//  - we need to render the recent (last weeks) requests to the heart component 
//  3. built out the activity component (heart) 
//  - set new/use api calls to gather recent activity from friends, recent likes (show the post), new follows last 2 weeks = "recent"
//  4. still need a view for single post => link tag / or redirect to a new route that will display a singlePostView component (to be made) that utilizes the other components  IF THERES TIME 
//  5. add profile search to search bar






export default class Gallery extends Component {

    state = {
        posts: [],
    }
    
    deletePost = (postID) => {
        api.posts.deletePost(postID)
        this.setState(prev => ({posts: prev.posts.filter(post => post.id != postID)}))
    }

    componentDidMount(){
        // let id = this.props.match.url.split('/')[2] --> change this to grab the second profile's id
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
    }

    renderPosts = () => {
        const {posts} = this.state
        return posts.map(post => <PostContainer key={post.id} post={post} deletePost={this.deletePost} /> )
    }
    

    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}