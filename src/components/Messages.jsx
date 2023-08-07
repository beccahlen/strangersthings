import React from "react";
import LoginPage from "./LoginPage";
import AddPost from "./AddPost"
import '../App.css'

//use token to see messages, dont need settoken will be just token

function Messages () {
    return (
        <><div className="profileMsg">Welcome back to your profile!</div>
            <h2><AddPost /></h2>
        </>
    )
}

export default Messages