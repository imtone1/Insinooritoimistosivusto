import React from 'react'
import { Box, Stack } from '@mui/material'
import Paaotsikko from '../otsikot/Paaotsikko'
import Lupaus from './Lupaus'

const Lupauksemme = () => {
  return (
    <Box className="boxit" sx={{ paddingBottom:0 }}>
      <Box sx={{ maxWidth: 900 , margin:'auto' }}>
        <Paaotsikko otsikko={'Miksi valita meidät?'} teksti={'Asiakkaiden luottamus on arvokkain voimavaramme! Sitoudumme tinkimättömään laatuun ja asiakkaan tyytyväisyyteen jokaisessa kohtaamisessa.'} />
      </Box>
      <Stack direction={'column'} sx={{ maxWidth:950, margin:'auto', gap:3, padding:3, paddingTop:3 }}>
        <Lupaus teksti={'Laatu on meille ykkösasia. Tarjoamme LVI-suunnittelupalveluita, joissa huippulaatu on taattu. Kokeneet suunnittelijamme varmistavat, että jokainen suunnitelma on tarkka, kestävä ja toimiva. Käytämme parhaita materiaaleja ja nykyaikaisia suunnittelumenetelmiä varmistaaksemme rakennuksesi pitkäikäisyyden ja toiminnallisuuden. Luota ammattitaitoomme ja valitse laadukas LVI-suunnittelu.'} otsikko1={'Korkea laatu'} />

        <Lupaus teksti={'Toimintamme on läpinäkyvää ja avointa. Näet kaiken dokumentaation kätevästi millä tahansa verkkolaitteella pilvipohjaisen modernin ohjelmiston avulla.'} otsikko1={'Läpinäkyvyys'}/>


        <Lupaus teksti={'Meidän LVI-suunnittelupalvelumme takaavat nopean reagoinnin ja tehokkaan työnkulun. Ammattitaitoinen tiimimme kykenee toimittamaan korkealaatuiset suunnitelmat lyhyessä ajassa, jotta voit aloittaa rakennusprojektisi sujuvasti. Säästä aikaa ja vaivaa valitsemalla meidät nopeuden ja laadun tinkimättömyyden vuoksi.'} otsikko1={'Nopeus'}/>


        <Lupaus teksti={'Palvelumme keskittyvät energiatehokkuuteen ja resurssien optimaaliseen hyödyntämiseen. Suunnittelemme LVI-järjestelmät siten, että ne tarjoavat tehokkaan energiankulutuksen ja alhaiset käyttökustannukset. Näin voit säästää kustannuksissa rakennuksen koko elinkaaren ajan. Olemme kumppanisi kohti taloudellisesti kannattavia ratkaisuja.'} otsikko1={'Kustannustehokkuus'} />

        <Lupaus teksti={'Asiakkaittemme tarpeet ovat meille ensisijaisia. Asiakaslähtöinen LVI-suunnittelu on vahvuutemme. Tavoitteenamme on toteuttaa visiosi sellaisena kuin haluat. Käytämme aikaa kuunnellaksemme tarpeitasi ja ymmärtääksemme projektisi vaatimukset. Tämän avulla pystymme suunnittelemaan LVI-ratkaisuja, jotka vastaavat parhaiten odotuksiasi.'} otsikko1={'Asiakaslähtöisyys'}/>
      </Stack>

    </Box>
  )
}

export default Lupauksemme