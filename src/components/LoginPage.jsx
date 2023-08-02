import React from "react";
import '../App.css'

function LoginPage () {
    return(<><div className="loginText">Login Here:</div>
        <div className="loginPage"><form><label>Username: </label>
            <input type="text" name="Username" />
            <label>Password: </label>
            <input type="password" name="Password" />
            <button className="btnLogin">submit</button></form></div>
            <div className="linksLogin"><a href='/'>Register </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/'>Continue as guest</a></div>
            </>
    )
}

export default LoginPage