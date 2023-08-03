import { useState } from "react";

export default function RegistrationForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );
      const result = await response.json();
      console.log("Signup Result: ", result);
      setToken(result.token);
      setSuccessMessage(result.message);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
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
          Email:{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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