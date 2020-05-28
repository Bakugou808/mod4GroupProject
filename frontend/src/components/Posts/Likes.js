import React, { Component } from 'react'
// import React from 'react'

import { api } from '../../services/api'

export default class Likes extends Component{
    // presentational 
    // let likeCount = props.likes.length 
    // const [likes, setLikes] = React.useState(likeCount)

    state = {
        likes: null,
        likers: null
    }

    componentDidMount(){
        const {id, type} = this.props
        // api.posts.getPost(id).then(res=> this.setState({post: res}))
        let body = {likable_type: type, likable_id: id}
        api.likes.getLikes(body).then(res=> this.setState({likes: res}))
        
        type === "Post" ? api.likes.getLikers(id).then(res=> this.setState({likers: res})) : api.likes.getCommentLikers(id).then(res=> this.setState({likers: res}))


    }

     renderLikeUi = () => {
        const {likes, likers} = this.state 
        
        let count = likes.length
        
        let recentLikers = []

        if (likers.length ===1){
            recentLikers = [likers[0].username, '...']
        }else if (likers.length === 2){
            recentLikers = [likers[0].username, likers[1].username, "..."]
        } else if (likers.length >2){
            recentLikers= [likers[0].username, likers[1].username, likers[2].username, '...' ]
        }  
        let ui = <div>
            <button className="btn btn-info btn-sm ml-1 mr-2" type="button" onClick={this.addLike}>{count} Likes!</button>
                     { }
                    {recentLikers.join(', ')}
                </div>
        return ui
    }
    
     addLike = () => {
        const {liker_id, id, type} = this.props
        
        let body = {profile_id: liker_id, likable_type: type, likable_id: id}
        api.likes.addLike(body).then(like => this.setState(prev => ({likes: [...prev.likes, like]})))
        // api.likes.getLikers(id).then(res=> this.setState({likers: res}))
        type === "Post" ? api.likes.getLikers(id).then(res=> this.setState({likers: res})) : api.likes.getCommentLikers(id).then(res=> this.setState({likers: res}))
    }
    

    render() {
        const {likes, likers} = this.state
        return (
            <div className="image_likes">
                {(likes&&likers) && this.renderLikeUi()}
            </div>
        )
    }
}
