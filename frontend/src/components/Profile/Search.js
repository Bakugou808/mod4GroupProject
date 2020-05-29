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
        return this.state.selectedPosts.map(post => post && <div className="col-md-auto my-3 ml-5"><PostContainer width='300px' post={post} /></div>)
    }

    render() {
        return (
            <div style={{width: '90vw', marginLeft: '1vw', marginTop: '3vh'}}>
                <ReactSearchBox
                    placeholder="Search posts"
                    data={this.state.data}
                    autoFocus
                    onChange={record => this.onChange(record)}
                    onSelect={record => this.onSelect(record)}
                    inputBoxFontSize="22px"
                    dropDownHoverColor="#ebffff"
                />
                {/* <ReactSearchBox 
                    placeholder="filter"
                    // data={this.state.date}
                    autoFocus
                    onChange={record => this.filterChange(record)}
                /> */}
                <div className="container">
                    <div className="row">
                        {this.state.selectedPosts && this.renderPost()}
                    </div>
                </div>
            </div>
        )
    }
}
