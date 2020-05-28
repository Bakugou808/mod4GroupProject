import React from 'react'
import Likes from './Likes'
import './Comment.scss'

export default function Comment({comment, commentorProfile, profileID, deleteComment}) {

    const handleDeleteComment = () => {
        deleteComment(comment.id)
    }
    

    return (
        <div>
            {/* {commentorProfile && <p>{comment.comment} - {commentorProfile.username}</p>} */}
            <div className="my-2">
                <p className="comment ml-2">{comment && comment.comment} - {commentorProfile && commentorProfile.username}</p>
                <div className="rmv-btn" onClick={handleDeleteComment}>&#10005;</div>
            </div>
            <Likes type={"Comment"} id={comment.id} liker_id={profileID}/>
        </div>
    )
}

// import React, { Component } from 'react'

// export default class Comment extends Component {

//     state {
//         commentor: null, 
//         edit: false,
//     }

//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
