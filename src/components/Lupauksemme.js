import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {COLORS} from '../values/colors'
import Paaotsikko from '../otsikot/Paaotsikko'
import Lupaus from './Lupaus'

const Lupauksemme = () => {
  return (
   <Box className="boxit" sx={{backgroundColor: COLORS.beige1 }}>

<Paaotsikko otsikko={'Miksi valita meidät?'} teksti={'Asiakkaiden luottamus on arvokkain voimavaramme! Sitoudumme tinkimättömään laatuun ja asiakkaan tyytyväisyyteen jokaisessa kohtaamisessa.'} />


<Stack direction={{xs:'column-reverse', md:'row'}} justifyContent="space-between"
  alignItems="center" maxWidth={900} margin={'auto'}>
  <Lupaus teksti={'Toimintamme on läpinäkyvää ja avointa. Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.'} otsikko1={'Läpinäkyvyys'} otsikko2={''}/>
    <Stack direction={'column'} p={{md:2, xs:2}}  className='lupaukset'>
    <Typography variant='body2' sx={{border:3, backgroundColor:'#c5e1a5',padding:3, maxWidth:300, boxShadow:'5px 10px 8px #888888'}}>
    Asiakkaidemme luottamus on arvokkain voimavaramme! Sitoudumme tinkimättömään laatuun ja asiakkaan tyytyväisyyteen jokaisessa kohtaamisessa.
    </Typography>
    </Stack>

   
</Stack>
<Stack direction={'column'} sx={{maxWidth:'90%', margin:'auto', gap:3, padding:3}}
   >
<Lupaus teksti={'Meidän LVI-suunnittelupalvelumme takaavat nopean reagoinnin ja tehokkaan työnkulun. Ammattitaitoinen tiimimme kykenee toimittamaan korkealaatuiset suunnitelmat lyhyessä ajassa, jotta voit aloittaa rakennusprojektisi nopeasti. Säästä aikaa ja vaivaa valitsemalla meidät nopeuden ja laadun yhdistelmän vuoksi.'} otsikko1={'Nopeus'} otsikko2={''}/>


<Lupaus teksti={'Säästä rahaa pitkällä tähtäimellä valitsemalla kustannustehokas LVI-suunnittelu. Meidän palvelumme keskittyvät energiatehokkuuteen ja resurssien optimaaliseen hyödyntämiseen. Suunnittelemme LVI-järjestelmät siten, että ne tarjoavat tehokkaan energiankulutuksen ja alhaiset käyttökustannukset. Näin voit säästää rahaa rakennuksen koko elinkaaren ajan. Olemme kumppanisi kohti taloudellisesti kannattavia ratkaisuja.'} otsikko1={'Kustannus'} otsikko2={'tehokkuus'}/>



<Lupaus teksti={`Laatu on meille ykkösasia. Tarjoamme LVI-suunnittelupalveluita, joissa huippulaatu on taattu. Kokeneet suunnittelijamme varmistavat, että jokainen suunnitelma on tarkka, kestävä ja toimiva. Käytämme parhaita materiaaleja ja nykyaikaisia suunnittelumenetelmiä varmistaaksemme rakennuksesi pitkäikäisyyden ja toiminnallisuuden. Luota ammattitaitoomme ja valitse laadukas LVI-suunnittelu.`} otsikko1={'Korkea laatu'} otsikko2={''}/>

<Lupaus teksti={'Sinun tarpeesi ovat meille ensisijaisia. Asiakaslähtöinen LVI-suunnittelu on vahvuutemme, ja tavoitteenamme on toteuttaa visiosi juuri sellaisena kuin haluat. Käytämme aikaa kuunnellaksemme tarpeitasi ja ymmärtääksemme projektisi vaatimukset. Tämän avulla pystymme suunnittelemaan LVI-ratkaisuja, jotka vastaavat täysin odotuksiasi. Luota meihin ja anna meidän toteuttaa unelmiesi LVI-järjestelmä.'} otsikko1={'Asiakas'} otsikko2={'lähtöisyys'}/>
</Stack>

    </Box>
  )
}

export default Lupauksemme