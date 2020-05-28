import React, { Component } from 'react'
import { api } from '../../services/api'

export default class Activity extends Component {

    state = {
        Requests: [],
        recentLikes: [],
        thisWeeksFriendPosts: [],
        thisMonthsFriendPosts: [],
    }

    componentDidMount(){ 
        let id = this.props.match.url.split('/')[2]
        api.followers.getFollowRequests(id).then(followers => this.setState({
            Requests: followers
        }))
    }

    render() {
        return (
            <div>
                Display: recent likes, friend's recent posts, new follows
            </div>
        )
    }
}
