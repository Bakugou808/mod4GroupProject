import React, { Component } from 'react'

export default class PostContainer extends Component {

    const {caption, comments, created_at, id, img_url, likes, profile_id} = this.props

    render() {
        return (
            <div>
                holds img + comments + likes
                <Image img_url={img_url}/>
                
                <Likes likes={likes}/>
                
                <Comments comments={comments}/>
            </div>
        )
    }
}
