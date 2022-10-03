import React, { useState } from "react";
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom'

function Register(){
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        console.log(displayName)
        console.log(email)
        console.log(password)
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            
            uploadTask.on(
                (error) => {
                    setErr(true)
                }, 
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                        await updateProfile(res.user, { displayName, photoURL: downloadURL})
                        
                        await setDoc(doc(db, "users", res.user.uid), { uid: res.user.uid, displayName, email, photoURL: downloadURL})

                        await setDoc(doc(db, "userChats", res.user.uid), {})
                        navigate("/")
                    });
                }
            );


        } catch (ex) {
            setErr(true)
        }
    }

    return (
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Anime Chat Hub</h1>
                <p className="login-message">Register New User</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-login">
                        <label htmlFor="text">Display Name</label>
                        <input type="text" name="displayName" id="displayName" placeholder="Enter Display Name" />
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
                    {err && <span>Something went wrong</span>}
                    <p className="register-link">You have an account? <Link to="/login">Login</Link></p>
                    {/* <div id="signInDiv"></div> */}
                </form>
            </div>
        </div>
    )
}

export default Register