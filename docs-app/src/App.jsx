import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Information from './pages/Information'
import MainLayout from './pages/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (

     <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="information" element={<Information />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
