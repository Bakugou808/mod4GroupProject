import React from 'react'
<<<<<<< HEAD

export default function Comment({comment, commentorProfile, deleteComment}) {

    const handleDeleteComment = () => {
        
=======
import Likes from './Likes'

export default function Comment({comment, commentorProfile, profileID, deleteComment}) {

    const handleDeleteComment = () => {
>>>>>>> pre_master
        deleteComment(comment.id)
    }
    

    return (
        <div>
            {/* {commentorProfile && <p>{comment.comment} - {commentorProfile.username}</p>} */}
            <p>{comment && comment.comment} - {commentorProfile && commentorProfile.username}</p>
<<<<<<< HEAD
=======
            <Likes type={"Comment"} id={comment.id} liker_id={profileID}/>
>>>>>>> pre_master
            <button type="button" onClick={handleDeleteComment}>Delete Comment</button>
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
