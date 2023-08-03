import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import Registration from './components/RegistrationPage'
import AllPosts from './components/AllPosts'
import AddPost from './components/AddPost'
import './App.css'

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }


  return (
    <>
    <Header />
    <NavBar />
{/*     {
      currentForm === 'login' ? <LoginPage onFormSwitch={toggleForm} /> : <Registration />
    } */}

<Registration />
  {/*   <AllPosts /> */}
{/*     <AddPost /> */}
    </>
  )
}

export default App
