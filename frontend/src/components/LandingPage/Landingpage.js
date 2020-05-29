import React from 'react'
import './Landingpage.css'
import Login from '../LoginSignup/Login'
import Signup from '../LoginSignup/Signup'
import { Route, Navlink, Link } from "react-router-dom";



const Landingpage = (props) => {
    const {onLogin, onSignup} = props
    return (
        <div className="landing-page container">
            <div className="row">
                <div className="signup_form col-5">
                    <h2 className="text-info">Signup</h2>
                    <br></br>
                    <Signup {...props} onSignup={onSignup}/>
                </div>
                <div className="col-1"></div>
                <div className="login_form col-6">
                    <h2 className="text-info">Login</h2>
                    <br />
                    <Login {...props} onLogin={onLogin} />
                </div>
            </div>
        </div>
    )
}
export default Landingpage