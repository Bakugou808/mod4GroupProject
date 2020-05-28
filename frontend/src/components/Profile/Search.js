import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import PostContainer from '../Posts/PostContainer'

export default class Search extends Component {
    state={
        posts: [],
        data: [],
        selectedPost: []
    }

    refreshMount = () => {
        this.componentDidMount()
    }

    componentDidMount() {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(json => {
            this.setState({posts:json})
            this.setCaption()
        })
    }

    setCaption = () => {
        const {posts} = this.state
        return posts.map(post => this.setState({data: [...this.state.data, {key: post.id, value: post.caption}]}))
    }

    onSelect = ({value}) => {
        let post = this.state.posts.filter(post => post.caption.includes(value))
        this.setState({selectedPost: post})
    }

    renderPost = () => {
        this.state.selectedPost.map(post => <PostContainer refreshMount={this.refreshMount} post={post} />)
    }

    render() {
        return (
            <div>
                <ReactSearchBox
                    placeholder="search posts"
                    data={this.state.data}
                    autoFocus
                    onSelect={record => this.onSelect(record)}
                />
                {this.renderPost()}
            </div>
        )
    }
}
