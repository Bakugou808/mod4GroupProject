// import React, { Component } from 'react'
import React from 'react'

import { api } from '../../services/api'

export default function Likes (props){
    // presentational 
    // let likeCount = props.likes.length 
    // const [likes, setLikes] = React.useState(likeCount)


    

    const renderLikeUi = () => {
        const {likes} = props 
        
        let count = likes.length
        let recentLikers = ["jimmy", "kaya", "docnani"]
        let ui = <div className="card-body">
            <button class="btn btn-primary" type="button" onClick={addLike}>{count} Likes!</button>
                     { }
                    {recentLikers.join(', ')}
                </div>
        return ui
    }
    
    const addLike = () => {
        const {liker_id, post_id, type, refreshMount} = props
        
        let body = {profile_id: liker_id, likable_type: type, likable_id: post_id}
        api.likes.addLike(body)
        refreshMount()
    }
    

    // render() {
        return (
            <div className="image_likes">
                {renderLikeUi()}
            </div>
        )
    // }
}
