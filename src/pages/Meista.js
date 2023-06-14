import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Paaotsikko from '../otsikot/Paaotsikko'

import {COLORS} from '../values/colors'
import Konsta from '../images/Konsta-Sappinen.png'
import Accordions from '../components/Accordions'
import Koulutusaccordion from '../components/Koulutusaccordion'

const Meista = () => {
  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey, overflow:'hidden'  }}>
    <Paaotsikko otsikko={'Meistä'} teksti={'Asiantunteva LVIA-suunnittelija palveluksessasi'}/>

    <Stack direction={'column'} sx={{gap:2, justifyContent:'center', alignItems:'center', width:'70%', margin:'auto'}}>
<Typography>
SapAir on aloittanut toimintansa vuonna 2015 toiminimellä. Toiminnan kasvaessa olemme siirtyneet osakeyhtiömuotoon syksyllä 2021. Nykyinen nimi on Insinööritoimisto SapAir Oy. Toimialueemme on koko Suomi. 
</Typography>
<Typography>
Vahvuuksiimme kuuluu asiakaslähtöisyys ja ketteryys.
</Typography>
<Typography>
Palvelemme asiakkaita niin tavanomaisissa, kuin vaativissakin projekteissa. Olemme pieni ja ketterä suunnittelutoimisto, jossa asiointi on sujuvaa ja nopeaa.
</Typography>
<Typography>
SapAir palvelee asiakkaita niin tavanomaisissa, kuin vaativissakin projekteissa. Olemme pieni ja ketterä suunnittelutoimisto, jossa asiointi on sujuvaa ja nopeaa.
</Typography>
<Typography>
Suunnittelemme energiatehokkaita rakennuksia, niin yksityisille kuin yrityksille sekä taloyhtiöille. 
</Typography>
<Typography>
Panostamme jatkuvaan opiskeluun ja itsensä kehittämiseen
</Typography>

    </Stack>
<Stack direction={'column'} sx={{gap:3, justifyContent:'center', alignItems:'center'}}>
<Typography variant='h3' sx={{p:{xs:4}}}>
  Konsta Sappinen
</Typography>
<Box sx={{maxwidth:400}}>
  <img src={Konsta} alt="Konsta-Sappinen" width={'100%'} />
</Box>
<Koulutusaccordion/>

</Stack>


<Stack sx={{width:{xs:'100%', lg:'900px'}, margin: 'auto'}}>
  <Typography variant='h3' sx={{ justifySelf:'center', alignSelf:'center', p:10}}>
  Arvojamme
</Typography>
  <Accordions/>
</Stack>

  </Box>
  )
}

export default Meista

