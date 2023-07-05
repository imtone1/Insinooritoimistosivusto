import React from 'react'
import Header from '../components/Header'
import Lupauksemme from '../components/Lupauksemme'
import SEO from '../components/SEO'

import Meistasanottua from '../components/Meistasanottua'

import Palvelupolkusteps from '../components/Palvelupolkusteps'
import Referenssimaara from '../components/Referenssimaara'
import Videoesittely from '../components/Videoesittely'
import Otayhteyttanappulassa from '../components/Otayhteyttanappulassa'
import Palvelutcard from '../components/Palvelutcard'


const Kotisivu = () => {
  return (
    <>
      <SEO title={'Instinööritoimisto SapAir Oy'} description={'Selkeä valinta, kun etsit LVIA-ammattilaista.Säästä itseäsi turhilta huolilta ja kustannuksilta, ota yhteyttä jo tänään.'}/>
      <a href="#main" className="skip-to-main-content-link">Siirry sisältöön</a>
      <Header/>
      <main id='main' style={{ overflow:'hidden' }}>
        <Palvelutcard/>
        <Referenssimaara/>
        <Lupauksemme/>
        <Videoesittely/>


        <Palvelupolkusteps/>
        <Meistasanottua/>
        <Otayhteyttanappulassa/>
      </main>

      <div hidden>
        <span id="new-window-Linkedin">Vie Linkedin sivulle uudessa ikkunassa</span>
        <span id="new-window-1">Avaa pdf tiedoston uudessa ikkunassa</span>

      </div>
    </>
  )
}

export default Kotisivu