import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {COLORS} from '../values/colors'
import Paaotsikko from '../otsikot/Paaotsikko'
import Lupaus from './Lupaus'

const Lupauksemme = () => {
  return (
   <Box className="boxit" sx={{backgroundColor: COLORS.beige1 }}>

<Paaotsikko otsikko={'Lupauksemme'} teksti={'Asiakkaiden luottamus on arvokkain voimavaramme! Sitoudumme tinkimättömään laatuun ja asiakkaan tyytyväisyyteen jokaisessa kohtaamisessa.'} />

<Box sx={{maxWidth:'80%', margin:'auto', justifyContent:"center",
  alignItems:{xs:'flex-start', md:"center"}}}>
<Stack direction={{xs:'column-reverse', md:'row'}} justifyContent="space-between"
  alignItems="center" maxWidth={900} margin={'auto'}>
  <Lupaus teksti={'Toimintamme on läpinäkyvää ja avointa. Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.'} otsikko1={'Läpinäkyvyys'} otsikko2={''}/>
    <Stack direction={'column'} p={{md:2, xs:2}} className='lupaukset'>
    <Typography variant='body2' sx={{border:3, padding:3, maxWidth:300, boxShadow:'2px 3px'}}>
    Asiakkaiden luottamus on arvokkain voimavaramme! Sitoudumme tinkimättömään laatuun ja asiakkaan tyytyväisyyteen jokaisessa kohtaamisessa.
    </Typography>
    </Stack>

   
</Stack>
<Stack direction={{xs:'column', md:'row'}} justifyContent="center"
  alignItems="center"  >
<Lupaus teksti={'Toimintamme on läpinäkyvää ja avointa. Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.'} otsikko1={'Nopeus'} otsikko2={''}/>


<Lupaus teksti={'Toimintamme on läpinäkyvää ja avointa. Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.'} otsikko1={'Kustannus'} otsikko2={'tehokkuus'}/>

</Stack>
<Stack direction={{xs:'column', md:'row'}} justifyContent="center"
  alignItems="center">
<Lupaus teksti={'Toimintamme on läpinäkyvää ja avointa. Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.'} otsikko1={'Korkea laatu'} otsikko2={''}/>

<Lupaus teksti={'Toimintamme on läpinäkyvää ja avointa. Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.'} otsikko1={'Asiakas'} otsikko2={'lähtöisyys'}/>
</Stack>
</Box>
    </Box>
  )
}

export default Lupauksemme