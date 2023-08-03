import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./Home";
import LoginPage from "./LoginPage";
import AllPosts from "./AllPosts";
import Logout from "./Logout";
import '../App.css'

function NavBar () {
    return(
        <div className="navBar">
          <a href="/">Home</a> &nbsp;
          <a href="/">Log In</a> &nbsp;
          <a href="/">Messages</a> &nbsp;
          <a href="/">All Posts</a> &nbsp;
          <a href="/">Log Out</a> &nbsp;
        </div>
    )
}

export default NavBar
