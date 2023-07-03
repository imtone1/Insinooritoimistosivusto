import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { COLORS } from '../values/colors'

import meeting from '../images/communication_employee_conference_conversation_meeting_discussion_icon.png'
import doc from '../images/editdocument.png'
import geardoc from '../images/doc.png'
import building from '../images/building.png'
import gearapp from '../images/mobile-development.png'
import finish from '../images/finishflag.png'

import Polkuitem from './Polkuitem'
import Polkuitemoik from './Polkuitemoik'

const Palvelupolku = () => {
  return (
    <Box sx={{ backgroundColor:COLORS.grey }}>
      <Stack direction={'column'} justifyContent="center" alignItems={'center'} sx={{ width:'80%', margin:'auto', gap:3 }} className='boxit'>

        <Polkuitem kuva={meeting} numero={'1.'} otsikko1={'Projekti'} otsikko2={'palaveri'} teksti={'Aloitamme aina projektipalaverilla. Istumme alas asiakkaan kanssa ja kuuntelemme tarkasti heidän ajatuksiaan käyttötarkoituksesta rakennukselle. Haluamme ymmärtää, millaisia tavoitteita heillä on ja mitä he haluavat saavuttaa.'}/>
        <Polkuitemoik kuva={doc} numero={'2.'} otsikko1={'Luonnos'} otsikko2={'suunnitelma'} teksti={'Projektipalaverin pohjalta laadimme luonnossuunnitelmia, jotka esittelemme asiakkaalle. Tämä vaihe on erittäin tärkeä, koska haluamme varmistaa, että suunnitelmat vastaavat asiakkaan toiveita ja tarpeita. Keräämme palautetta ja kuuntelemme huolellisesti, jos heillä on muutostoiveita.'}/>
        <Polkuitem kuva={geardoc} numero={'3.'} otsikko1={'Toteutus'}  otsikko2={'suunnitelma'} teksti={'Kun toteutussuunnitelma on valmis, se toimitetaan asiakkaalle kommenteille. Kun asiakas on hyväksynyt suunnitelmat, ne toimitetaan rakennusvalvontaan. '}/>
        <Polkuitemoik kuva={building} numero={'4.'} otsikko1={'Rakennus'} otsikko2={'valvonta'}
          teksti={'Kun rakennusvalvonta on laittanut leimat suunnitelmiin, voidaan aloittaa työt. On muistettava, että ennen töiden aloitusta, kun kyseessä on rakennuslupa, LVI-töille on oltava KVV/IV-työnjohtaja. Tarjoamme tämänkin palvelun.'}/>
        <Polkuitem kuva={gearapp} numero={'5.'} otsikko1={'Työ etenee'} otsikko2={''} teksti={'Työn sujuvoimisesta raportoidaan asiakkaan toiveen mukaisesti sähköpostitse ja/tai ohjelmiston kautta. Ohjelmiston hyvänä puolena on, että kaikki dokumentaatio säilyy yhdessä paikassa eikä ole huolta, että jokin tärkeä dokumentti häviää sähköpostitulvaan.  '}/>


      </Stack>
      <Box sx={{ justifyContent:'center', alignItems:'center', width:'60%', margin:'auto' }}>
        <Stack component={'div'} direction={{ xs:'column-reverse', md:'row' }} sx={{ width:'80%', gap:3 , padding:3, justifyContent:'center', alignItems:'center' }} >

          <Box sx={{ width:'140%', marginRight:2 }}>
            <img src={finish} alt="finish" width={213} height={213} />
          </Box>

          <Stack direction={'column'} >

            <Typography variant='body1' sx={{ fontWeight:'600' , pb:'20px' }}>
    Työ valmis
            </Typography>
            <Typography>
    Suunnitelmat toimitetaan 2D/3D suunnitelmina modernilla mallinnussuunnitelluohjelmalla tehtynä. 3D:n etuna on tarkempi suunnitelma, jossa esimerkiksi törmäilyt on helpompi minimoida ja materiaalilaskenta on tarkka. Kun suunnitelmat on tehty 3D:na asennukset on helppo tehdä jopa rakentajan itse, josta tulee säästöjä.
            </Typography>

          </Stack>

        </Stack>

      </Box>
    </Box>

  )
}

export default Palvelupolku