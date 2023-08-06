import React from "react";
import AddPost from "./AddPost"

//use token to see messages, dont need settoken will be just token

function Messages () {
    return (
        <h6>Messages<br/><br/>
            to do - link to API using token to pull only logged in user messages<br/>
            allow add messages to push to API<br/>
            allow delete messages remove from API <br/>
            <AddPost />
        </h6>
    )
}

export default Messages