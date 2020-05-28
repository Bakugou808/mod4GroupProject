import React, { Component } from 'react'
import Image from './Image'
import Likes from './Likes'
import Comments from './Comments'

export default class PostContainer extends Component {

    

    render() {
        const {caption, comments, created_at, id, img_url, likes, profile_id} = this.props.post
        const {refreshMount} = this.props

        return (
            <div>
                <Image img_url={img_url} caption={caption} created_at={created_at} likes={likes} liker_id={profile_id} post_id={id}/>
                <Likes likes={likes} post_id={id} liker_id={profile_id} type={"Post"} refreshMount={refreshMount}/>
                
                
                
                <Comments comments={comments}/>
                
            </div>
        )
    }
}
