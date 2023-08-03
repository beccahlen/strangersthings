import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

function LoginPage (props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }


    return(
    <>
    <div className="loginText">Login Here:</div>
        <div className="loginPage"><form onSubmit={handleSubmit}><label>Username: </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="Username" />
            <label>Password: </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="Password" />
            <button type="submit" className="btnLogin">submit</button></form></div>
            <div className="linksLogin">
                <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
            </div>
            </>
    )
}

export default LoginPage