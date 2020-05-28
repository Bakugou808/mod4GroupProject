import React, { Component, Fragment } from 'react'
import { api } from '../../services/api'
import PostContainer from '../Posts/PostContainer'

// 1. create home news feed 
//  - create flow => api library fetch => controller => model (query for recent posts) => send back to Home component => render posts with post components 
//  - render the photos with post container component
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






export default class ViewOtherGallery extends Component {

    state = {
        posts: [],
        viewedProfile: null,
        followers: [],
        following: []
    }

    componentDidMount(){
        let id = this.props.match.params.viewProfileId
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
        api.profile.getProfile(id).then(profile => this.setState({viewedProfile: profile, followers: profile.followers}))
        api.followers.getFollowing(id).then(following => this.setState({following: following}))
    }

    renderPosts = () => {
        const {posts} = this.state
        const {userProfileID} = this.props
        return posts.map(post => <PostContainer key={post.id} post={post} userProfileID={userProfileID}/> )
    }

    handleAddFollower = () => {
        const {userProfileID, match} = this.props
        
        let body = {follower_id: userProfileID, profile_id: match.params.viewProfileId, approved: true}
        api.profile.addFollower(body).then(res => this.setState(prev => ({followers: [...prev.followers, res]})))
    }
    
    renderViewedProfile = () => {
        const {viewedProfile, followers, following} = this.state

        return <Fragment> 
            <img src={viewedProfile.img_file}></img>
            <h2 onClick={this.handleAddFollower}>{followers.length}Followers +</h2>
            <h2>{following.length} following</h2>
            <h3>{viewedProfile.username}</h3>
        </Fragment>
        
    }
    
    

    render() {
        const {viewedProfile} = this.state
        return (
            <div>
                
                {viewedProfile && this.renderViewedProfile()}
                {this.renderPosts()}
                I am a new view gallery
            </div>
        )
    }
}