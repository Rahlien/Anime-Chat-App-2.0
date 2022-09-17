import React from "react";
import Add from "../img/addAvatar.png"

function Register(){
    return (
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Anime Chat Hub</h1>
                <p className="login-message">Register New User</p>
                <form className="form">
                    <div className="input-login">
                        <label htmlFor="text">Display Name</label>
                        <input type="text" name="userName" id="userName" placeholder="Enter Display Name" />
                        <span className="msg">Display Name Taken</span>
                    </div>

                    <div className="input-login">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Valid email" />
                        <span className="msg">Valid email</span>
                    </div>

                    <div className="input-login">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="New Password" />
                        <span className="msg">Must meet Password criteria</span>
                    </div>

                    <input style={{display: "none"}} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an Avatar</span>
                    </label>

                    <button type="submit" className="login-button">Create User</button>
                    <p className="register-link">You have an account? Login</p>
                    {/* <div id="signInDiv"></div> */}
                </form>
            </div>
        </div>
    )
}

export default Register