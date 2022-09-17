import React from "react";

function Navbar() {
    const testImage = "https://media-exp1.licdn.com/dms/image/C4D03AQE631CRUrmWXQ/profile-displayphoto-shrink_200_200/0/1614001628212?e=1668643200&v=beta&t=8fodZN7pO2Ztf7AbpiWlH8BbNm03YUa9P_GvBxKBcsg"

    return (
        <div className="navbar">
            <span className="logo">Anime Chat Hub</span>
            <div className="user">
                <img src={testImage} alt="" />
                <span>Roger</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar