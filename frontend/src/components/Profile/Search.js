import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import PostContainer from '../Posts/PostContainer'

export default class Search extends Component {
    state={
        posts: [],
        data: [],
        selectedPosts: [],
        searchValue: "",
        filter: ""
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
        posts && posts.map(post => this.setState({data: [...this.state.data, {key: post.id, value: post.caption.split(' ')}]}))
    }

    onSelect = ({value}) => {
        let post = this.state.posts.filter(post => post.caption.includes(value))
        this.setState({selectedPosts: post})
    }

    onChange = (record) => {
        this.setState({searchValue: record}, this.setState({selectedPosts: this.state.posts.map(post => post.caption.includes(this.state.searchValue) && post )}))
        // this.setState({selectedPosts: this.state.posts.map(post => post.caption.includes(this.state.searchValue))})
    }

    // filterChange = (record) => {
    //     this.setState({filter: record}, this.filterSelected)
    // }
    
    // filterSelected = () => {
    //     this.setState(prev => ({selectedPosts: prev.selectedPosts.map(post => !post.caption.include(this.state.filter.shift()))}))
    // }
    
    

    renderPost = () => {
        return this.state.selectedPosts.map(post => post && <PostContainer post={post} />)
    }

    render() {
        return (
            <div>
                <ReactSearchBox
                    placeholder="search posts"
                    data={this.state.data}
                    autoFocus
                    onChange={record => this.onChange(record)}
                    onSelect={record => this.onSelect(record)}
                />
                {/* <ReactSearchBox 
                    placeholder="filter"
                    // data={this.state.date}
                    autoFocus
                    onChange={record => this.filterChange(record)}
                /> */}
                {this.state.selectedPosts && this.renderPost()}
            </div>
        )
    }
}
