import React from "react";
import GoBack from "./GoBack";
import { useState } from "react";
import { Link } from "react-router-dom";

function Registration (props) {
    const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(username, email, password);
        }


    return(
        <>    <div className="registerText">Register Here:</div>
        <div className="registerForm"><form onSubmit={handleSubmit}><label htmlFor='username'>Username: </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="Username" />
            <label htmlFor='email'>Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="Email" />
            <label htmlFor='password'>Password: </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="Password" />
            <button type="submit" className="btnRegister">Submit</button></form>
            <GoBack /></div>
            </>
    )
}

export default Registration