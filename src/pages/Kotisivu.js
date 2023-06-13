import React from 'react'
import Header from '../components/Header'
import Palveluitamme from '../components/Palveluitamme'
import Lupauksemme from '../components/Lupauksemme'
import Talopalvelu from '../components/Talopalvelu'
import Palvelupolku from '../components/Palvelupolku'
import Meistasanottua from '../components/Meistasanottua'
import Otayhteytta from '../components/Otayhteytta'


const Kotisivu = () => {
  return (
    <div style={{overflow:'hidden' }}>
    <Header/>
    <Palveluitamme/>
    <Lupauksemme/>
    <Talopalvelu/>
    <Palvelupolku/>
    <Meistasanottua/>
    <Otayhteytta/>

    
    </div>
  )
}

export default Kotisivu