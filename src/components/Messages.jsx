import React from "react";
import LoginPage from "./LoginPage";
import AddPost from "./AddPost"
import '../App.css'

//use token to see messages, dont need settoken will be just token

function Messages ({token}) {
    return (
        <><div className="profileMsg">Welcome back to your profile!</div>
            <h2><AddPost token={token} /></h2>
        </>
    )
}

export default Messages