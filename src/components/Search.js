import React from "react";

function Search() {
    const testImage = "https://media-exp1.licdn.com/dms/image/C4D03AQE631CRUrmWXQ/profile-displayphoto-shrink_200_200/0/1614001628212?e=1668643200&v=beta&t=8fodZN7pO2Ztf7AbpiWlH8BbNm03YUa9P_GvBxKBcsg"


    return (
        <div className="search">
            <div className="searchForm" >
                <input type="text" placeholder="Find a User" />
            </div>
            <div className="userChat">
                <img src={testImage} alt="" />
                <div className="userChatInfo">
                    <span>Roger</span>
                </div>
            </div>
        </div>
    )
}

export default Search