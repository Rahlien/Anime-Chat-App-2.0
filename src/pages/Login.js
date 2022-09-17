import React from "react";


function Login(){
    return (
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Welcome to the Anime Chat Hub!</h1>
                <p className="login-message">Please Register or Login to Enter</p>
                <form className="form">
                    <div className="input-login">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <span className="msg">Valid email</span>
                    </div>

                    <div className="input-login">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <span className="msg">Incorrect password</span>
                    </div>

                    <button type="submit" className="login-button">Login</button>
                    <p className="register-link">Don't have an account? Register a new User</p>
                    {/* <div id="signInDiv"></div> */}
                </form>
            </div>
        </div>
    )
}

export default Login