import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateEntity from '../pages/CreateEntity'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Verifyregister from '../pages/VerifyRegister'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEntity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verifyregister />} />
    </Routes>
  )
}

export default MainRoute
