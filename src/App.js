import React, { lazy, Suspense } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


// const Kotisivu = lazy(() =>
//   import('./pages/Kotisivu').then(module => {
//     return { default: module.Kotisivu }
//   } )
// )
const Kotisivu = lazy(() => import('./pages/Kotisivu'))
const Yhteystiedot = lazy(() => import('./pages/Yhteystiedot'))
const Meista = lazy(() => import('./pages/Meista'))
const Palvelut = lazy(() => import('./pages/Palvelut'))

function App() {
  return (
    <>
      <HelmetProvider>
        <Navbar/>
        <Routes>

          <Route path='/' element={<AppWithSuspense/>}>
            <Route path="/" element={<Kotisivu/>}/>
            <Route path="/yhteystiedot" element={<Yhteystiedot/>}/>
            <Route path="/meista" element={<Meista/>}/>
            <Route path='/palvelut' element={<Palvelut/>}/>
          </Route>

        </Routes>
        <Footer/>
      </HelmetProvider>
    </>
  )
}

function AppWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet/>
    </Suspense>
  )
}


export default App
