import React from 'react'

export default function Comment({comment, commentorProfile, deleteComment}) {

    const handleDeleteComment = () => {
        
        deleteComment(comment.id)
    }
    

    return (
        <div>
            {/* {commentorProfile && <p>{comment.comment} - {commentorProfile.username}</p>} */}
            <p>{comment && comment.comment} - {commentorProfile && commentorProfile.username}</p>
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
