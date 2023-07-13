import React, { lazy, Suspense } from 'react'
import './App.css'

import { ErrorBoundary } from 'react-error-boundary'

import { Route, Routes,  Navigate, useNavigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Kotisivu from './pages/Kotisivu'
// import Yhteystiedot from './pages/Yhteystiedot'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Meista from './pages/Meista'
// import Palvelut from './pages/Palvelut'
// import NotFound from './pages/NotFound'

const Palvelut = lazy(() => import('./pages/Palvelut'))
const Yhteystiedot = lazy(() => import('./pages/Yhteystiedot'))
const Meista = lazy(() => import('./pages/Meista'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
              <Suspense fallback={<div>Sivu latautuu, odota hetki...</div>}>
                <Yhteystiedot/>
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path="/meista" element={
            <ErrorBoundary fallback={<div>Yritä ladata sivu uudelleen..</div>}
              onReset={() => navigate('/')}>
              <Suspense fallback={<div>Sivu latautuu, odota hetki...</div>}>
                <Meista/>
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path='/palvelut' element={
            <ErrorBoundary fallback={<div>Yritä ladata sivu uudelleen..</div>}
              onReset={() => navigate('/')}>
              <Suspense fallback={<div>Sivu latautuu, odota hetki...</div>}>
                <Palvelut/>
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path='/404.html' element={
            <ErrorBoundary fallback={<div>Yritä ladata sivu uudelleen..</div>}
              onReset={() => navigate('/')}>
              <Suspense fallback={<div>Sivu latautuu, odota hetki...</div>}>
                <NotFound />
              </Suspense>
            </ErrorBoundary>

          }/>
          <Route path="*" element={<Navigate to="/404.html" />} />
        </Routes>
        <Footer/>
      </HelmetProvider>
    </>
  )
}

export default App
