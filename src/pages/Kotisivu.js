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
      <a href="#main" className="skip-to-main-content-link">Siirry sisältöön</a>
    <Header/>
    <main id='main'>
      <Palveluitamme/>
      <Referenssimaara/>
      <Lupauksemme/>
      <Talopalvelu/>
      
      <Palvelupolkusteps/>
      <Meistasanottua/>
      <Otayhteytta/>
    </main>

    <div hidden>
  <span id="new-window-Linkedin">Vie Linkedin sivulle uudessa ikkunassa</span>
  <span id="new-window-1">Avaa pdf tiedoston uudessa ikkunassa</span>
  
</div>
    </div>
  )
}

export default Kotisivu