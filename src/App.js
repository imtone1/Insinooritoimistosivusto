import React, { lazy, Suspense } from 'react'
import './App.css'

import { ErrorBoundary } from 'react-error-boundary'

import { Route, Routes,  Navigate, useNavigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Kotisivu from './pages/Kotisivu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Skelet from './components/Skelet'

const Palvelut = lazy(() => import('./pages/Palvelut'))
const Yhteystiedot = lazy(() => import('./pages/Yhteystiedot'))
const Meista = lazy(() => import('./pages/Meista'))
// const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const navigate =useNavigate()

  return (
    <>
      <HelmetProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Kotisivu/>}/>
          <Route path="/yhteystiedot" element={
            <ErrorBoundary fallback={<div>Yritä ladata sivu uudelleen..</div>}
              onReset={() => navigate('/')}>
              <Suspense fallback={<Skelet/>}>
                <Yhteystiedot/>
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path="/meista" element={
            <ErrorBoundary fallback={<div>Yritä ladata sivu uudelleen..</div>}
              onReset={() => navigate('/')}>
              <Suspense fallback={<Skelet/>}>
                <Meista/>
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path='/palvelut' element={
            <ErrorBoundary fallback={<div>Yritä ladata sivu uudelleen..</div>}
              onReset={() => navigate('/')}>
              <Suspense fallback={<Skelet/>}>
                <Palvelut/>
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path='/404.html' element={
            <NotFound />

          }/>
          <Route path="*" element={<Navigate to="/404.html"/>} />
        </Routes>
        <Footer/>
      </HelmetProvider>
    </>
  )
}

export default App
