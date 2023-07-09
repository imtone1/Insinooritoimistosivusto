import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Kotisivu from './pages/Kotisivu'
import Yhteystiedot from './pages/Yhteystiedot'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Meista from './pages/Meista'
import Palvelut from './pages/Palvelut'
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
      <HelmetProvider>
        <Navbar/>
        <Routes>
          <Route >
            <Route path="/" element={<Kotisivu/>}/>
            <Route path="/yhteystiedot" element={<Yhteystiedot/>}/>
            <Route path="/meista" element={<Meista/>}/>
            <Route path='/palvelut' element={<Palvelut/>}/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
        <Footer/>
      </HelmetProvider>
    </>
  )
}

export default App
