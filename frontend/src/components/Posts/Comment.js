import React from 'react'
import Likes from './Likes'
import './Comment.scss'

export default function Comment({comment, commentorProfile, profileID, deleteComment}) {

    const handleDeleteComment = () => {
        deleteComment(comment.id)
    }
    

    return (
        <div>
            <div className="my-2">
                <p className="comment ml-2">{comment && comment.comment} - {commentorProfile && commentorProfile.username}</p>
                
                {profileID === comment.profile_id && <div className="rmv-btn" onClick={handleDeleteComment}>&#10005;</div>}
            </div>
            <Likes type={"Comment"} id={comment.id} liker_id={profileID}/>

            {<button type="button" onClick={handleDeleteComment}>Delete Comment</button>}
        </div>
    )
}


