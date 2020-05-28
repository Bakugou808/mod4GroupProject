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
            //     <div className="row col-sm-6">
            //         <div class="card" style={{width: '301px'}}>
            //             <Image img_url={img_url} caption={caption} created_at={created_at} likes={likes} liker_id={profile_id} post_id={id}/>
            //             <Likes class="card-body" likes={likes} post_id={id} liker_id={profile_id} type={"Post"} refreshMount={refreshMount}/>
            //             <Comments class="card-body" comments={comments}/>  
            //         </div>
            //     </div>
            <div>
                {/* need a profile handler component --> display a new route tag that makes a fetch call for that profile's posts, and renders them --> eg. <Route to={profiles/currentprofileID/view/otherprofileID} */}
                <Image img_url={img_url} caption={caption} created_at={created_at} likes={likes} liker_id={profile_id} post_id={id}/>
                <Likes id={id} liker_id={profile_id} type={"Post"} />
                <Comments post_id={id} profile_id={profile_id}/>
                <button onClick={this.handleDeletePost}>Delete Post</button>
                
            </div>
        )
    }
}
