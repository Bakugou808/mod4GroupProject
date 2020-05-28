import React, { Component, Fragment } from 'react'
import { api } from '../../services/api'
import PostContainer from '../Posts/PostContainer'
import HandleProfile from './HandleProfile'
import ViewOtherGallery from '../Gallery/ViewOtherGallery'
import { Route, Link } from "react-router-dom";



export default class Feed extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        const {profile} = this.props
        this.getFeed()
    }


    getFeed = () => {
        let id = this.props.match.url.split('/')[2]
        console.log(id, "inget feed")
        api.profile.getFeed(id).then(feed => this.setState({posts: feed}))
        
    }

    renderFeed = () => {
        const {posts} = this.state
        const {match, userProfileID} = this.props

        return posts.map(post => {
            return (
                <Fragment>
                    <HandleProfile key={post.profile.id} profile={post.profile} userProfileID={userProfileID} match={match} />
                    <PostContainer key={post.id} post={post} userProfileID={userProfileID}/>
                </Fragment>
                
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
