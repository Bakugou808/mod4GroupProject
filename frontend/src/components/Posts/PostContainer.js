import React, { Component } from 'react'
import Image from './Image'
import Likes from './Likes'
import Comments from './Comments'
import { api } from '../../services/api'


export default class PostContainer extends Component {

    handleDeletePost = () => {
        const {id} = this.props.post
        this.props.deletePost(id)
    }
    

    render() {
        const {caption, comments, created_at, id, img_url, likes, profile_id} = this.props.post

        return (
            <div>
                <Image img_url={img_url} caption={caption} created_at={created_at} likes={likes} liker_id={profile_id} post_id={id}/>

<<<<<<< HEAD
                <Likes post_id={id} liker_id={profile_id} type={"Post"} />
=======
                <Likes id={id} liker_id={profile_id} type={"Post"} />
>>>>>>> pre_master

                
                
                <Comments post_id={id} profile_id={profile_id}/>
                <button onClick={this.handleDeletePost}>Delete Post</button>
                
            </div>
        )
    }
}
