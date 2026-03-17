
import './App.css'
import Home from './pages/home'
import Information from './pages/Information'
import InformationController from './pages/InformationController'
import InformationService from './pages/InformationService'
import MainLayout from './pages/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (

     <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="information" element={<Information />} />
        <Route path="informationController" element={<InformationController />} />
          <Route path="informationService" element={<InformationService />} />

      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
