import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


import {COLORS} from '../values/colors'
import Konsta from '../images/Konsta-Sappinen.png'
import Accordions from '../components/Accordions'
import Koulutusaccordion from '../components/Koulutusaccordion'

import coffee from '../images/coffee.png'
import DataTable from '../components/Datatable'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';

const Meista = () => {
  return (
    <Box sx={{backgroundColor:COLORS.grey, overflow:'hidden'}}>
 
 <section className="layers" >
  <Box className="layers__container" sx={{height:'20vh', minHeight:200}} >
    <div className="layers__item layer-1" style={{backgroundImage: `url(${coffee})`, transform: 'translateZ(95px) scale(0.90)'}}></div>
    
    <div className="layers__item layer-3" style={{transform: 'translateZ(180px) scale(.8)'}}>
      <div className="otsikko2-content">
        <h1>SapAir Oy</h1>
        <div className="otsikko2-content__p">Asiantunteva LVIA-suunnittelija palveluksessasi</div>
        
        
      </div>
    </div>

    
  </Box>
</section>

    <Stack direction={'column'} sx={{gap:2, justifyContent:'center', alignItems:'center', width:'70%', margin:'auto'}}>
<Typography className='hero-content__p'>
SapAir on aloittanut toimintansa vuonna 2015 toiminimellä. Toiminnan kasvaessa olemme siirtyneet osakeyhtiömuotoon syksyllä 2021. Nykyinen nimi on Insinööritoimisto SapAir Oy. Toimialueemme on koko Suomi. 
</Typography>

<Typography>
SapAir palvelee asiakkaita niin tavanomaisissa, kuin vaativissakin projekteissa. Olemme pieni ja ketterä suunnittelutoimisto, jossa asiointi on sujuvaa ja nopeaa.
</Typography>
<Typography>
Suunnittelemme energiatehokkaita rakennuksia, niin yksityisille kuin yrityksille sekä taloyhtiöille. 
</Typography>


    </Stack>
<Stack direction={'column'} sx={{gap:3, justifyContent:'center', alignItems:'center'}}>
<Stack direction={'row'} sx={{ justifyContent:'center', alignItems:'center'}}>
  <Typography variant='h3' sx={{p:{xs:4}}}>
    Konsta Sappinen
  </Typography>
  <LinkedInIcon fontSize='large' onClick={event =>  window.location.href='https://www.linkedin.com/in/konsta-sappinen-364ba575/'} />
</Stack>
<Typography variant='h5'>
        Vastaava LVIA-suunnittelija, Toimitusjohtaja
          </Typography>
          <Stack direction={{xs:'column',md:'row'}} gap={2}>
              <Stack direction={'row'} gap={1}>
              <PhoneInTalkIcon/>
              <Typography >
              044 019 09 87
              </Typography>
              </Stack>
              <Stack direction={'row'} gap={1} >
              <MailIcon/>
              <Typography >
              konsta.sappinen@sapair.fi
              </Typography>
              </Stack>
    
          </Stack>
<Box sx={{maxwidth:400}} className='konstakuva'>
  <img src={Konsta} alt="Konsta-Sappinen" width={'100%'} />
</Box>
<Koulutusaccordion/>

</Stack>

<Stack direction={'column'} sx={{ gap:2}}>
  <Stack sx={{ justifySelf:'center', alignSelf:'center', p:10, gap:2}}>
    <Typography variant='h3' sx={{ justifySelf:'center', alignSelf:'center'}} >
    Suunnittelijan referenssit
    </Typography>
    <Typography sx={{ justifySelf:'center', alignSelf:'center'}}>
      Työnjälki puhuu puolestaan. Tutustu alla oleviin suunnittelijan referensseihin ja vakuutu laadusta.
    </Typography>
  </Stack>
 
  <Box sx={{width:{xs:'100%',lg:'85%'}, margin:'auto'}}>
  <DataTable/>
  </Box>

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

