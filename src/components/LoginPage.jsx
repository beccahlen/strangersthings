import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationPage";
import '../App.css'

function LoginPage () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

/*     const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (forName) => {
        setCurrentForm(forName);
      }
 */
    async function handleSubmit(e) {
        e.preventDefault();

        if(error){
            console.log('Error, try again')
            return
        }

        let response = await fetch('https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        console.log('-- SENT TO SERVER--')

        let result = await response.json()

        console.log('result:', result)
        setToken(result.token) // add the token to state
        // after token is set, navigate to dashboard
        navigate('/Profile')

    }
    

    function passwordValidation(event) {
        let passwd = event.target.value
        if (passwd.length < 4) {
            setError('Password is too short!')
        } else {
            setError('')
        }

        setPassword(passwd)
    
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
                <Link to='/Registration'><button>Don't have an account? Register here</button></Link>
            </div>
            </>)
    
}

export default LoginPage