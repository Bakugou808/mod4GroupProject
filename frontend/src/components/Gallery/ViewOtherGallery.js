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

// add the followers and following info to gallery page or activity page --> need to add unique list for followers count + unfollow button maybe
// clean up the ability to delete comments and posts from the feed --> only delete your own comments 


// + unfollow button maybe



//  3. built out the activity component (heart) 
//  - set new/use api calls to gather recent activity from friends, recent likes (show the post), new follows last 2 weeks = "recent"
//  4. still need a view for single post => link tag / or redirect to a new route that will display a singlePostView component (to be made) that utilizes the other components  IF THERES TIME 
//  5. add profile search to search bar






export default class ViewOtherGallery extends Component {

    state = {
        posts: [],
        viewedProfile: null,
        followers: [],
        following: [],
        alreadyFollowing: false,
    }

    componentDidMount(){
        let id = this.props.match.params.viewProfileId
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
        api.profile.getProfile(id).then(profile => this.setState({viewedProfile: profile}))
        // , followers: profile.followers
        api.followers.getFollowers(id).then(followers => this.setState({followers: followers}))
        api.followers.getFollowing(id).then(following => this.setState({following: following}), this.state.followers.filter(follower => follower.id === this.props.userProfileID) && this.setState({alreadyFollowing: true}))
        // followers.filter(follower => follower.id === userProfileID) && this.setState({alreadyFollowing: true})
    }

    renderPosts = () => {
        const {posts} = this.state
        const {userProfileID, match} = this.props
        return posts.map(post => <PostContainer key={post.id} post={post} userProfileID={parseInt(userProfileID)} match={match}/> )
    }

    handleAddFollower = () => {
        const {userProfileID, match} = this.props
        const {followers} = this.state

        
            let body = {follower_id: userProfileID, profile_id: match.params.viewProfileId, approved: true}
            api.profile.addFollower(body).then(res => this.setState(prev => ({followers: [...prev.followers, res]})))

        

    }
    
    renderViewedProfile = () => {
        const {viewedProfile, followers, following, alreadyFollowing} = this.state

        return <Fragment> 
            <img src={viewedProfile.img_file}></img>
            {alreadyFollowing ? 

            // need to fix the follow condition
           <div><h2>{followers.length}Followers</h2><h4>(Followed)</h4></div> : <h2 onClick={this.handleAddFollower}>{followers.length}Followers +</h2>}
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