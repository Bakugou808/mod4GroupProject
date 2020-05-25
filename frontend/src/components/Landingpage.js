import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Route, Navlink, Link } from "react-router-dom";



const Landingpage = (props) => {
    const {onLogin, onSignup} = props
    return (
        <div>
            <div className="signup_form">
                Signup
                <br></br>
                <Signup {...props} onSignup={onSignup}/>
            </div>
            
             <br></br>
             <div className="login_form">
                Login
                <br></br>
                <Login {...props} onLogin={onLogin} />
             </div>
             
        </div>
    )
}
export default Landingpage