import React from "react";
import { Link } from "react-router-dom";
import AllPosts from "./AllPosts";
import '../App.css'

function NavBar () {
    return(
        <div className="navBar">
            <Link to='/AllPosts'>All Posts</Link>&nbsp;
            <a href='link'>Messages &nbsp;</a>
            <a href='link'>Logout</a>
        </div>
    )
}

export default NavBar
