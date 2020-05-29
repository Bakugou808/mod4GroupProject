import React, { Component } from 'react'
import './PostContainer.scss'
import Image from './Image'
import Likes from './Likes'
import Comments from './Comments'
import { api } from '../../services/api'


export default class PostContainer extends Component {
    state={
        name: ''
    }

    handleDeletePost = () => {
        const {id} = this.props.post
        this.props.deletePost(id)
    }

    render() {

        const {caption, created_at, id, img_url, likes, profile_id} = this.props.post
        const {userProfileID, match} = this.props

        return (


            <div className="card" style={{width: this.props.width}}>
                <Image handleClick={() => {let name =this.props.handleClick(); this.setState({name: name}) }} size={this.props.width} img_url={img_url} caption={caption} created_at={created_at} likes={likes} liker_id={userProfileID} post_id={id} match={match}/>
                <div className={this.state.name}>
                    <Likes id={id} liker_id={userProfileID} type={"Post"} match={match}/>              
                    <Comments post_id={id} profile_id={userProfileID} match={match}/>
                    {userProfileID === profile_id && <button className="btn btn-warning" onClick={this.handleDeletePost}>Delete Post</button> }
                </div>
            </div>
        )
    }
}


// import React, { Component } from 'react'
// import Image from './Image'
// import Likes from './Likes'
// import Comments from './Comments'
// import { api } from '../../services/api'


// export default class PostContainer extends Component {

//     handleDeletePost = () => {
//         const {id} = this.props.post
//         this.props.deletePost(id)
//     }
    

//     render() {
//         const {caption, created_at, id, img_url, likes, profile_id} = this.props.post
//         const {userProfileID, match} = this.props
//         return (

//             <div className="card" style={{width: 301}}>
//                 <Image img_url={img_url} caption={caption} created_at={created_at} likes={likes} liker_id={userProfileID} post_id={id} match={match}/>
//                 <Likes id={id} liker_id={userProfileID} type={"Post"}  match={match}/>              
//                 <Comments post_id={id} profile_id={userProfileID} match={match}/>
//                 {userProfileID === profile_id && <button className="btn btn-warning" onClick={this.handleDeletePost}>Delete Post</button> }
//             </div>
//         )
//     }
// }
