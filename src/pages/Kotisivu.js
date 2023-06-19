import React from 'react'
import Header from '../components/Header'
import Palveluitamme from '../components/Palveluitamme'
import Lupauksemme from '../components/Lupauksemme'
import Talopalvelu from '../components/Talopalvelu'

import Meistasanottua from '../components/Meistasanottua'
import Otayhteytta from '../components/Otayhteytta'
import Palvelupolkusteps from '../components/Palvelupolkusteps'
import Referenssimaara from '../components/Referenssimaara'


const Kotisivu = () => {
  return (
    <div style={{overflow:'hidden' }}>
    <Header/>
    <Palveluitamme/>
    <Referenssimaara/>
    <Lupauksemme/>
    <Talopalvelu/>
    
    <Palvelupolkusteps/>

    <Meistasanottua/>
    <Otayhteytta/>

    
    </div>
  )
}

export default Kotisivu