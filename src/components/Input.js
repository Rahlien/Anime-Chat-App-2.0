import React from "react";
import Paperclip from "../img/paperclip.png"
import Image from "../img/image.png"

function Input() {
    return (
        <div className="input">
            <input type="text" placeholder="Enter message here..." />
            <div className="send">
                <img src={Paperclip} alt="" />
                <input type="file" style={{display: "none"}} id="file" />
                <label htmlFor="file">
                    <img src={Image} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input