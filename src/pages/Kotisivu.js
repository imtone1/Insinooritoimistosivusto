import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Palveluitamme from '../components/Palveluitamme'
import Lupauksemme from '../components/Lupauksemme'
import Talopalvelu from '../components/Talopalvelu'
import Palvelupolku from '../components/Palvelupolku'


const Kotisivu = () => {
  return (
    <div style={{overflow:'hidden' }}>
    <Navbar/>
    <Header/>
    <Palveluitamme/>
    <Lupauksemme/>
    <Talopalvelu/>
    <Palvelupolku/>

    
    </div>
  )
}

export default Kotisivu