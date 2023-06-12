import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Palveluitamme from '../components/Palveluitamme'

const Kotisivu = () => {
  return (
    <div style={{overflow:'hidden' }}>
    <Navbar/>
    <Header/>
    <Palveluitamme/>
    
    </div>
  )
}

export default Kotisivu