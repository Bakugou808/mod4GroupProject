import React, { Component } from 'react'
import { api } from '../../services/api'

export default class Activity extends Component {

    state = {
        Requests: [],
        allLikes: [],
        allPosts: [],
        allFollows: [],
        recentLikes: [],
        thisWeeksFriendPosts: [],
        thisMonthsFriendPosts: [],
    }

    componentDidMount(){ 
        let id = this.props.match.url.split('/')[2]
        api.followers.getFollowRequests(id).then(followers => this.setState({
            Requests: followers
        }), this.getAllFollowedPosts())
        api.followers.getFollowers(id).then(followers => this.setState({allFollows: followers}))
       
    }

    getAllFollowedPosts = () => {
        if(this.state.Requests.length) {
            this.state.Requests.map(friend => {
            console.log(friend)
            return api.posts.getPosts(friend.id)
            .then(posts => this.setState({allPosts: [...this.state.allPosts], posts}))
            })
        } 
    }

    render() {
        return (
            <div>
                {/* Display: recent likes, friend's recent posts, 
                new follows  get all like and posts and follows*/}
                hello
            </div>
        )
    }
}
