// import React, { Component, Fragment } from 'react'
// import { Route, Navlink, Link } from "react-router-dom";
// import './Profile.scss'
// import { api } from '../../services/api'
// import SideMenu from './SideMenu'
// import Search from './Search'
// import Gallery from '../Gallery/Gallery'
// import AddMedia from './AddMedia'
// import Activity from './Activity'
// import Stats from './Stats'
// import Feed from './Feed'
// import ViewOtherGallery from '../Gallery/ViewOtherGallery'





//  class Profile extends Component {

//     state = {
//         profile: {},
//     } 

//     componentDidMount(){
//         // api.profile.getCurrentProfile(this.props.match.params.id).then(profile =>{
//         //     this.setState({profile: profile})
//         //     this.getFeed(profile.id)
//         //     })

//         api.profile.getCurrentProfile(this.props.match.params.id).then(profile => {
//             this.setState({profile: profile},this.props.setProfile(profile))
//             this.props.setProfile(profile)


//             // this.getFeed(profile.id)
//         })
//     }

    

    
//     render() {
//         const {profile} = this.state
//         const {username} = this.state.profile
//         const {match} = this.props
        
//         return (
//             <div className="wrapper" > 

//                 <div className="side_menu_div">
//                     <SideMenu class={this.props.class} match={match}/> 
//                 </div>
//                 <div className="page">
                   

//                   <Route exact path={`${match.url}/search`} render={(props) => <Search {...props} userProfileID={match.params.id}/>} />
//                   <Route exact path={`${match.url}/gallery`} render={props => <Gallery {...props} userProfileID={match.params.id} profile={profile} /> } />
//                   <Route exact path={`${match.url}/addMedia`} render={props => <AddMedia {...props} userProfileID={match.params.id} profile={profile} /> } />
//                   <Route exact path={`${match.url}/activity`} render={props => <Activity {...props} userProfileID={match.params.id} profile={profile} /> } />
//                   <Route exact path={`${match.url}/stats`} render={props => <Stats {...props} userProfileID={match.params.id} profile={profile} /> } />
//                   <Route exact path={`${match.url}`} render={props => <Feed {...props} userProfileID={match.params.id} profile={profile} />} />
//                   <Route exact path={`${match.url}/view/:viewProfileId`}  render={props => <ViewOtherGallery {...props} userProfileID={match.params.id} />} />

//                 </div>

//             </div>
//         )
//     }
// }
// export default Profile 




import React, { Component, Fragment } from 'react'
import { Route, Navlink, Link } from "react-router-dom";
import './Profile.scss'
import { api } from '../../services/api'
import SideMenu from './SideMenu'
import Search from './Search'
import Gallery from '../Gallery/Gallery'
import AddMedia from './AddMedia'
import Activity from './Activity'
import Stats from './Stats'
import Feed from './Feed'
import ViewOtherGallery from '../Gallery/ViewOtherGallery'





 class Profile extends Component {

    state = {
        profile: {},
    } 

    componentDidMount(){
        // api.profile.getCurrentProfile(this.props.match.params.id).then(profile =>{
        //     this.setState({profile: profile})
        //     this.getFeed(profile.id)
        //     })

        api.profile.getCurrentProfile(this.props.match.params.id).then(profile => {
            this.setState({profile: profile},this.props.setProfile(profile))
            this.props.setProfile(profile)


            // this.getFeed(profile.id)
        })
    }

    

    
    render() {
        const {profile} = this.state
        const {username} = this.state.profile
        const {match} = this.props
        
        return (
            <div className="wrapper" > 

                <div className="side_menu_div">
                    <SideMenu class={this.props.class} match={match}/> 
                </div>
                <div className="page">
                  <Route exact path={`${match.url}/search`} render={(props) => <Search {...props} userProfileID={parseInt(match.params.id)}/>} />
                  <Route exact path={`${match.url}/gallery`} render={props => <Gallery {...props} userProfileID={parseInt(match.params.id)} profile={profile} /> } />
                  <Route exact path={`${match.url}/addMedia`} render={props => <AddMedia {...props} userProfileID={parseInt(match.params.id)} profile={profile} /> } />
                  <Route exact path={`${match.url}/activity`} render={props => <Activity {...props} userProfileID={parseInt(match.params.id)} profile={profile} /> } />
                  <Route exact path={`${match.url}/stats`} render={props => <Stats {...props} userProfileID={parseInt(match.params.id)} profile={profile} /> } />
                  <Route exact path={`${match.url}`} render={props => <Feed {...props} userProfileID={parseInt(match.params.id)} profile={profile} />} />
                  <Route exact path={`${match.url}/view/:viewProfileId`}  render={props => <ViewOtherGallery {...props} userProfileID={parseInt(match.params.id)} />} />
                </div>
            </div>
        )
    }
}
export default Profile 
