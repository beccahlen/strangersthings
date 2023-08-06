import { useState, useRef, useEffect } from "react";
import LoginPage from "./LoginPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState('')
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

        if (error){
            // DONT SUBMIT THE FORM
            console.log('Did not send...')
            return
        }

        let response = await fetch('https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
              username, 
              password } })
        })

        console.log('-- SENT TO SERVER--')

        let result = await response.json()

        console.log('result:', result)
        setToken(result.token) // add the token to state
        // after token is set, navigate to dashboard
        navigate('/')

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


  return (
    <div>
     <h2>Signup</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>


    </div>
  );
}
















/* import React from "react";
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

export default Registration */