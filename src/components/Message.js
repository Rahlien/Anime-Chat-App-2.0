import React from "react";

function Message() {
    const testImage = "https://media-exp1.licdn.com/dms/image/C4D03AQE631CRUrmWXQ/profile-displayphoto-shrink_200_200/0/1614001628212?e=1668643200&v=beta&t=8fodZN7pO2Ztf7AbpiWlH8BbNm03YUa9P_GvBxKBcsg"


    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={testImage} alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src={testImage} alt="" />
            </div>
        </div>
    )
}

export default Message