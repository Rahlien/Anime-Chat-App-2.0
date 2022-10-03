import React, {useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"

function Search() {
    const testImage = "https://media-exp1.licdn.com/dms/image/C4D03AQE631CRUrmWXQ/profile-displayphoto-shrink_200_200/0/1614001628212?e=1668643200&v=beta&t=8fodZN7pO2Ztf7AbpiWlH8BbNm03YUa9P_GvBxKBcsg"
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const handleSearch = async() => {
        const q = query(collection(db, "users"), where("displayName", "==", username))

        try {
            const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    setUser(doc.data())
                });

        } catch (ex) {
            setErr(ex)
        }
    }

    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    }

    return (
        <div className="search">
            <div className="searchForm" >
                <input type="text" placeholder="Find a User" onChange={e=>setUsername(e.target.value)} onKeyDown={handleKey} />
            </div>
            {err && <span>No User Found!</span>}
            {user && <div className="userChat">
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search