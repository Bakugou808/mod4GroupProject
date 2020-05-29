// import React, { Component } from 'react'
// import { api } from '../../services/api'
// import Comment from './Comment'

// export default class Comments extends Component {

//     state = {
//         comments: null, 
//         // commentors: null,
//         comment: '',
//         render: false,
//     }

//     componentDidMount(){
//         const {post_id} = this.props 
//         api.comments.getComments(post_id).then(res => this.setState({comments: res}))
//         // api.comments.getCommentors(post_id).then(res => this.setState({commentors: res}))
//     }

//     addComment = (event) => {
//         event.preventDefault()
//         const {comment} = this.state 
//         const {post_id, profile_id} = this.props 
//         // const {profile} = this.props.post
        
//         let body = {post_id: post_id, profile_id: profile_id, comment: comment}
//         api.comments.addComment(body).then(res => this.setState(prev => ({comments: [...prev.comments, res]}), this.setState({render:true})))
        

//         this.setState({comment:''})
//     }
    
//     handleChange = (event) => {
//         this.setState({comment: event.target.value})
//     }
    
//     renderComments = () => {
//         const {comments} = this.state 
//         const {profile_id} = this.props 
//         return comments.map(comment => <Comment key={comment.id} comment={comment} commentorProfile={comment.profile} profileID={profile_id} deleteComment={this.deleteComment}/>)
//     }
//     handleRenderComments = () => {
//         this.setState(prev => ({render: !prev.render}))
//     }
    
//     deleteComment = (commentID) => {
//         console.log(commentID)
//         api.comments.deleteComment(commentID)
//         this.setState(prev => ({comments: prev.comments.filter(comment => comment.id != commentID)}))
//     }
    
    


//     render() {
//         const {comment, comments, render} = this.state 
//         return (
//             <div>
                // <div className="comments my-2 ml-1" style={{cursor: 'pointer', color: 'teal'}} onClick={this.handleRenderComments}>Comments...</div>
//                  {render && this.renderComments()}

//                  <form onSubmit={this.addComment}>
//                      <label className="ml-1">Add Comment +</label>
//                      <input type="text" name="comment" value={comment} onChange={this.handleChange}/>
//                  </form>
//             </div>
//         )
//     }
// }




import React, { Component } from 'react'
import { api } from '../../services/api'
import Comment from './Comment'

export default class Comments extends Component {

    state = {
        comments: null, 
        // commentors: null,
        comment: '',
        render: false,
    }

    componentDidMount(){
        const {post_id} = this.props 
        api.comments.getComments(post_id).then(res => this.setState({comments: res}))
        // api.comments.getCommentors(post_id).then(res => this.setState({commentors: res}))
    }

    addComment = (event) => {
        event.preventDefault()
        const {comment} = this.state 
        const {post_id, profile_id} = this.props 
        // const {profile} = this.props.post
        
        let body = {post_id: post_id, profile_id: profile_id, comment: comment}
        api.comments.addComment(body).then(res => this.setState(prev => ({comments: [...prev.comments, res]}), this.setState({render:true})))
        

        this.setState({comment:''})
    }
    
    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }
    
    renderComments = () => {
        const {comments} = this.state 
        const {profile_id} = this.props 
        return comments.map(comment => <Comment key={comment.id} comment={comment} commentorProfile={comment.profile} profileID={profile_id} deleteComment={this.deleteComment}/>)
    }
    handleRenderComments = () => {
        this.setState(prev => ({render: !prev.render}))
    }
    
    deleteComment = (commentID) => {
        console.log(commentID)
        api.comments.deleteComment(commentID)
        this.setState(prev => ({comments: prev.comments.filter(comment => comment.id != commentID)}))
    }
    
    


    render() {
        const {comment, comments, render} = this.state 
        return (
            <div>
                <div className="comments my-2 ml-1" style={{cursor: 'pointer', color: 'teal'}} onClick={this.handleRenderComments}>Comments...</div>
                 {render && this.renderComments()}

                 <form onSubmit={this.addComment}>
                     <label className="ml-1">Add Comment +</label>
                     <input style={{marginBottom: '10px'}} type="text" name="comment" value={comment} onChange={this.handleChange}/>
                 </form>
            </div>
        )
    }
}
