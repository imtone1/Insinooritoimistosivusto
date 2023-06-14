import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Paaotsikko from '../otsikot/Paaotsikko'

import {COLORS} from '../values/colors'
import Konsta from '../images/Konsta-Sappinen.png'

const Meista = () => {
  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey  }}>
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
<Typography variant='h3'>
  Konsta Sappinen
</Typography>
<Box sx={{width:400}}>
  <img src={Konsta} alt="Konsta-Sappinen" width={'100%'} />
</Box>
<Typography variant='h5'>
  Koulutus
  </Typography>
  <Stack>
  <Typography>
  Kone- ja tuotantotekniikan koulutusohjelma, insinööri (AMK), suuntautuminen LVI-tekniikkaan, Turun AMK
  </Typography>
  <Typography>
  2013-2016
  </Typography>
  </Stack>

  <Stack>
  <Typography>
  Työteknikko, RastorCollege
  </Typography>
  <Typography>
  2011-2013
  </Typography>
  </Stack>



  <Typography variant='h5'>
  Jatkokoulutus/Pätevyydet/Erikoisosaaminen
  </Typography>
 
  <Typography>
  Jatkuvat maalämpöjärjestelmien valmistajien laitekoulutukset
  </Typography>

 

  <Stack>
  <Typography>
  Älykkäät ja kestävät kiinteistöjen energiaratkaisut (5op) YAMK, Metropolia
  </Typography>
  <Typography>
  2021
  </Typography>
  </Stack>

  <Stack>
  <Typography>
  Poikkeuksellisen vaativat kohteet ja erikoisjärjestelmät (5op) YAMK, Metropolia
  </Typography>
  <Typography>
  2020
  </Typography>
  </Stack>

  <Stack>
  <Typography>
  KVV- ja IV työnjohtajakoulutus, TuLVI
  </Typography>
  <Typography>
  2018
  </Typography>
  </Stack>

  <Stack>
  <Typography>
  Sisäilmaopinnot IV-suunnittelijoille ja -asiantuntijoille (3op) AMK, Metropolia
  </Typography>
  <Typography>
  2017
  </Typography>
  </Stack>


</Stack>

  </Box>
  )
}

export default Meista

