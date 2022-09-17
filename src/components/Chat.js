import React from "react";
import Add from "../img/Add.png"
import Camera from "../img/camera.png"
import More from "../img/more.png"
import Input from "./Input";
import Messages from "./Messages";

function Chat() {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={Camera} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
                <Messages />
                <Input />
        </div>
    )
}

export default Chat