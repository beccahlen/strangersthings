import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import Logout from './components/Logout'
import Messages from './components/Messages'
import RegistrationPage from './components/RegistrationPage'
import AllPosts from './components/AllPosts'
import AddPost from './components/AddPost'
import Home from './components/Home'
import './App.css'

function App() {
  const cohortName = '2306-FTB-ET-WEB-FT'
  const baseUrl = (`https://strangers-things.herokuapp.com/api/${cohortName}`)
  const [currentForm, setCurrentForm] = useState('login');
  const [token, setToken] = useState('')
  const toggleForm = (forName) => {
    setCurrentForm(forName);  
  }


  return (
    <>
    <Header />
    <NavBar />
    <p>{token}</p>

<Routes>
          <Route path="/Login" element={<LoginPage setToken={setToken} />}>Log In</Route> &nbsp;
          <Route path="/" element={<Home />}>Home</Route> &nbsp;
          <Route path="/Profile" element={<Messages token={token}/>}>Profile</Route> &nbsp;
          <Route path="/Registration" element={<RegistrationPage setToken={setToken}/>}>Registration</Route> &nbsp;
          <Route path="/AllPosts" element={<AllPosts token={token}/>}>Messages</Route> &nbsp;
          <Route path="/Logout" element={<Logout />}>Log Out</Route> &nbsp;

          <Route path="/AddPost" element={<AddPost token={token}/>}>Add post</Route>
          </Routes>
    </>
  )
}

export default App
