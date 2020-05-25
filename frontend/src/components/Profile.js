import React, { Component } from 'react'
import { api } from '../services/api'

 class Profile extends Component {

    state = {
        profile: {}
    }

    componentDidMount(){
        
        api.profile.getCurrentProfile(this.props.match.params.id).then(profile => this.setState({profile: profile}))
    }


    
    render() {
        const {profile} = this.state
        const {username} = this.state.profile
        return (
          
            <div>
                {username && `${username}'s Profile`}
            </div>
         
            
        )
    }
}
export default Profile 
