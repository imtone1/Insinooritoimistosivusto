import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Paaotsikko from '../otsikot/Paaotsikko'
import {  Box } from '@mui/material'
import Palaute from './Palaute'
import tablelasit from '../images/tablelasit.png'




const Meistasanottua = () => {
  return (

    <Box className="boxit"  sx={{ alignItems:'center', justifyContent:'center' , position:'relative' }}>
      <Box sx={{ position:'absolute', top:{ xs:'25%', md:'20%', xl:'20%' }, right:{ xs:-70, xl:'25%' }, width:'80vh', maxWidth:600 }} >
        <img src={tablelasit} alt='kannettava tietokone harmaalla taustalla' style={{ width: '100%' }}/></Box>
      <Box sx={{ margin:{ xs:'auto', sm:5, lg:'auto' }, width:{ xs:'80%', md:500, lg:800 } }} className='palautebox'>

        <Paaotsikko otsikko={'Meistä sanottua'} teksti={'Asiakastyytyväisyys on meille kunnia-asia.'} />

        <Carousel autoPlay stopOnHover infiniteLoop centerMode showStatus={false} interval={5000}  showThumbs={false} showIndicators={false} centerSlidePercentage={100}>
          <Palaute teksti={'SapAir Oy ja Konsta olivat todella hyvä yhteistyökumppani meidän kohteessa. Vaikka rakennusvalvonta asetti mitä ihmeellisimpiä ehtoja ja vaatimuksia, jaksoi Konsta neuvotella, suunnitella ja opastaa. Maallikkona oli ilo työskennellä hänen kanssaan, kun ymmärsin mitä puhutaan.Yhteistyö jatkuu tulevissa projekteissa!'} rating={5}/>

          <Palaute teksti={'Ammattitaitoista, tehokasta ja joustavaa sekä hyvin ystävällistä toimintaa kaikenkaikkiaan. Myös asiakkaan toiveita ja ajatuksia kuunnellen. Suosittelen lämpimästi!'} rating={5} />

          <Palaute teksti={'Asiantuntevaa, tehokasta ja nopeaa toimintaa. Kysymyksiin vastataan ja toimeksianto maaliin uskomattoman nopeasti. Apua myös toimeksiannon/työn jälkeen. Vahva suositus.'} rating={5}/>

          <Palaute teksti={'Käynti työmaalle järjestyi nopealla aikataululla ja paikalle saavuttiin sovitusti. Todella ammattitaitoinen ja asiantunteva palvelu. En voi kun lämpimästi suositella yritystä.'} rating={5}/>

          <Palaute teksti={'Suosittelemme ehdottomasti yhteistyötä Konstan kanssa. Yhteydenpito on ollut koko ajan sujuvaa ja vastaukset tulevat hetkessä. Asiantuntemus ja vinkit ovat myös olleet erittäin hyödyllisiä.' } rating={5}/>
          <Palaute teksti={'Kiitos Konsta, LVi-suunnittelu ja työn valvonta ei olisi paremmin voinneet mennä.'} rating={4}/>
          <Palaute teksti={'Oikein hyvää ja asiantuntevaa palvelua. Iso suositus.'} rating={5}/>

          <Palaute teksti={'Nopeaa ja asiantuntevaa osaamista, suosittelen! 👍'} rating={5}/>
          <Palaute teksti={'Asiallinen toimija, suosittelen lämpimästi!'} rating={5}/>
        </Carousel>

      </Box>

    </Box>

  )
}

export default Meistasanottua