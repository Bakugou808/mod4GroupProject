import React, { Component } from 'react'

 class Profile extends Component {

    state = {
        profile: {}
    }

    
    render() {
        
        const {username} = this.props.profile
        return (
            <div>
                {/* {username}'s Profile */}
                this is a profile
            </div>
        )
    }
}
export default Profile 
