import React, { Component, Fragment } from 'react'
import './Feed.scss'
import { api } from '../../services/api'
import PostContainer from '../Posts/PostContainer'
import HandleProfile from './HandleProfile'
import ViewOtherGallery from '../Gallery/ViewOtherGallery'
import { Route, Link } from "react-router-dom";



export default class Feed extends Component {

    state = {
        posts: [],
        display: true
    }

    componentDidMount(){
        const {profile} = this.props
        this.getFeed()
    }


    getFeed = () => {
        let id = this.props.match.url.split('/')[2]
        api.profile.getFeed(id).then(feed => this.setState({posts: feed}))
    }

    handleClick = () => {
        if(this.props.history.location.pathname === `/profiles/${this.props.profile.id}` && this.state.display){
            this.setState({display: false})
            console.log('fuck')
            return 'none'
        } else {
            this.setState({display: true}) 
            return ''
        }
    }
    

    renderFeed = () => {
        const {posts} = this.state
        const {match, userProfileID} = this.props

        return posts.map(post => {
            return (
                <div className="big-card my-5">
                    <HandleProfile key={post.profile.id} profile={post.profile} userProfileID={userProfileID} match={match} />
                    <PostContainer handleClick={this.handleClick} width='60vw' key={post.id} post={post} userProfileID={userProfileID}/>
                </div> 
            )
        } )
    }
 

    render() {
        const {posts} = this.state
        return (
            <div>
                {posts && this.renderFeed()}
            </div>
        )
    }
}
