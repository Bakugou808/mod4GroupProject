import React, { Component } from 'react'
import { api } from '../services/api'

export default class Gallery extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        let id = this.props.match.url.split('/')[2]
        api.posts.getPosts(id).then(posts => this.setState({posts: posts}))
    }

    render() {
        return (
            <div>
                Hello Profile icon
            </div>
        )
    }
}
