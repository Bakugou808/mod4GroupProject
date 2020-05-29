import React, { Component, Fragment } from 'react'
import { api } from '../../services/api'
import './Gallery.scss'
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
        display: true
    }

    componentDidMount(){
        let id = this.props.match.params.viewProfileId
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
        api.profile.getProfile(id).then(profile => this.setState({viewedProfile: profile}))
        // , followers: profile.followers
        api.followers.getFollowers(id).then(followers => this.setState({followers: followers}))
// <<<<<<< master
//         api.followers.getFollowing(id).then(following => this.setState({following: following}), this.state.followers.filter(follower => follower.id === this.props.userProfileID) && this.setState({alreadyFollowing: true}))
//         // followers.filter(follower => follower.id === userProfileID) && this.setState({alreadyFollowing: true})
// =======

        api.followers.getFollowing(id).then(following => this.setState({following: following})) 

        // this.checkFollower()
    }

    // checkFollower = () => {
        
    //     const {followers} = this.state 
    //     let id = followers.filter(follower => follower.id === this.props.userProfileID) 
    //     id && this.setState({alreadyFollowing: true}) 
    // }
    

    renderPosts = () => {
        const {posts} = this.state
        const {userProfileID, match} = this.props
        return posts.map(post => {
            return (
            <div className="col-md-auto my-3 ml-5">
                <PostContainer handleClick={this.handleClick} width="301px" key={post.id} post={post} userProfileID={parseInt(userProfileID)} match={match}/> 
            </div>)
        })
    }

    handleAddFollower = () => {
        const {userProfileID, match} = this.props
        const {followers} = this.state

        let body = {follower_id: userProfileID, profile_id: match.params.viewProfileId, approved: true}
            api.profile.addFollower(body).then(res => this.setState(prev => ({followers: [...prev.followers, res]})))

        

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
    
    renderViewedProfile = () => {
        const {viewedProfile, followers, following, alreadyFollowing} = this.state

        return <div className="top-gallery other-gal mb-3"> 
            <img className="image-gallery" src={viewedProfile.img_file}></img>
            <h2>{viewedProfile.username}</h2>
            {alreadyFollowing ? 


//             // need to fix the follow condition
//            <div><h2>{followers.length}Followers</h2><h4>(Followed)</h4></div> : <h2 onClick={this.handleAddFollower}>{followers.length}Followers +</h2>}
//            <h2 onClick={this.handleAddFollower}>{followers.length}Followers +</h2>

           (<><h5>{followers.length}Followers(Followed) | {following.length} Following</h5> </>) : <h5 onClick={this.handleAddFollower}>{followers.length} Followers <span style={{color: 'green', cursor: 'pointer'}}>+</span> | {following.length} Following</h5>}
            
            
            <h5></h5>
        </div>
        
    }
    
    

    render() {
        const {viewedProfile} = this.state
        return (
            <div>
                
                {viewedProfile && this.renderViewedProfile()}
                <div className="container">
                    <div className="row">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        )
    }
}