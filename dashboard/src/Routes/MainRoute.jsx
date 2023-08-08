import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateEntity from '../pages/CreateEntity'
import Home from '../pages/Home'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEntity />} />
    </Routes>
  )
}

export default MainRoute
