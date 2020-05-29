import React, { Component, Fragment } from 'react'
import { api } from '../../services/api'

// new profile needs to refresh on submit -> 
export default class Activity extends Component {

    state = {
        followers: [],
        likedPosts: [],

        thisWeeksFriendPosts: [],
        // thisMonthsFriendPosts: [],
    }

    componentDidMount(){ 
        const {userProfileID} = this.props
        api.followers.getFollowers(userProfileID).then(followers => this.setState({
            followers: followers
        }))
        api.profile.getProfileLikedPosts(userProfileID).then(likedPosts => this.setState({likedPosts: likedPosts}))
        api.profile.getFriendsPosts(userProfileID).then(posts => this.setState({thisWeeksFriendPosts: posts[0]}))

    }

    renderFollows = () => {
        const {followers} = this.state
        return followers.map(follower => <p className="follower">{follower.username} recently followed you!</p>)
    }
    
    renderLikes = () => {
        const {likedPosts} = this.state
        
        return likedPosts.map(arr => (
            <div width='60vw'>
                <div className='post-info' >
                    <img src={arr[0]} className="activity-post-photo"/>
                    <br></br>
                    {arr[1]}
                </div> 
                <div className="liked-list">
                    {arr[2].length} Likes! 
                    {this.renderLikeList(arr[2])}
                </div>
            </div> 
        ))
    }

    renderLikeList = (arr) => {
        return arr.map(profile => {
            return (
                <div className="liked-info">
                    <img src={profile.img_file} className="avatar"/>
                    {profile.username} liked your post!
                </div>
            )
        })
 
    }
    

    convertDate = (created_at) => {
        
        let date = new Date(created_at).toLocaleDateString('en-GB', {  
            day : 'numeric',
            month : 'short',
            year : 'numeric'
        })
        return date 
    }
    


    renderPosts = () => {
        const {thisWeeksFriendPosts} = this.state
        
        return thisWeeksFriendPosts && (
            thisWeeksFriendPosts.map(post => (
                <div className="recent-post">
                    <img src={post.img_url} />
                    <br/>
                    {post.caption} by {post.profile.username} on {this.convertDate(post.created_at)}
                    
                </div>
            ))
        ) 
    }

    renderDetails = () => {
        const {likedPosts, thisWeeksFriendPosts, followers} = this.state

        return <div className="activity-card">
             <div>
                <h2>Recent Follows</h2>
                <div className="collapsable-recent-followers">
                    {followers && this.renderFollows()}
                </div>
            </div>
            <div>
                <h2>Recent Likes</h2>
                <div className="collapsable-recent-likes">
                    {likedPosts && this.renderLikes()}
                </div>
            </div>
            <div>
                <h2>Recent Posts</h2>
                <div className="collapsable-recent-posts">
                    {thisWeeksFriendPosts && this.renderPosts()}
                </div>
            </div> 
        </div>

    }
    

    render() {
        const {likedPosts} = this.state
        return (
            <div>
                Display: recent likes, friend's recent posts, new follows
                {likedPosts && this.renderDetails()}

            </div>
        )
    }
}
