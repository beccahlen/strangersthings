import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import LoginPage from "./LoginPage";
import Messages from "./Messages";
import AllPosts from "./AllPosts";
import Logout from "./Logout";

function NavBar () {
    return(
        <div className="navBar">
            <Link to='/'>Home</Link> &nbsp; 
            <Link to='/Login'>Login</Link> &nbsp; 
            <Link to='/Profile'>Profile</Link> &nbsp; 
            <Link to='/AllPosts'>All Posts</Link> &nbsp; 
            <Link to='/Logout'>Log Out</Link>
        </div>
    )
}

export default NavBar
