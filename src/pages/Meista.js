import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


import {COLORS} from '../values/colors'
import Konsta from '../images/Konsta-Sappinen.png'
import Accordions from '../components/Accordions'
import Koulutusaccordion from '../components/Koulutusaccordion'

import coffee from '../images/coffee.png'
import DataTable from '../components/Datatable'
import Referenssimaara from '../components/Referenssimaara'

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
    {/* <div className="layers__item layer-4">
      <canvas className="rain"></canvas>
    </div> */}
    
  </Box>
</section>

    <Stack direction={'column'} sx={{gap:2, justifyContent:'center', alignItems:'center', width:'70%', margin:'auto'}}>
<Typography className='hero-content__p'>
SapAir on aloittanut toimintansa vuonna 2015 toiminimellä. Toiminnan kasvaessa olemme siirtyneet osakeyhtiömuotoon syksyllä 2021. Nykyinen nimi on Insinööritoimisto SapAir Oy. Toimialueemme on koko Suomi. 
</Typography>
<Typography>
Vahvuuksiimme kuuluu asiakaslähtöisyys ja ketteryys.
</Typography>
<Typography>
SapAir palvelee asiakkaita niin tavanomaisissa, kuin vaativissakin projekteissa. Olemme pieni ja ketterä suunnittelutoimisto, jossa asiointi on sujuvaa ja nopeaa.
</Typography>
<Typography>
Suunnittelemme energiatehokkaita rakennuksia, niin yksityisille kuin yrityksille sekä taloyhtiöille. 
</Typography>


    </Stack>
<Stack direction={'column'} sx={{gap:3, justifyContent:'center', alignItems:'center'}}>
<Typography variant='h3' sx={{p:{xs:4}}}>
  Konsta Sappinen
</Typography>
<Box sx={{maxwidth:400}} className='konstakuva'>
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

<Stack direction={'column'} sx={{ gap:2}}>
  <Stack sx={{ justifySelf:'center', alignSelf:'center', p:10, gap:2}}>
    <Typography variant='h3' sx={{ justifySelf:'center', alignSelf:'center'}} >
      Referenssit
    </Typography>
    <Typography sx={{ justifySelf:'center', alignSelf:'center'}}>
      Työnjälki puhuu puolestaan. Tutustu alla oleviin referensseihimme ja huomaa, minkä takia olemme tunnettuja laadusta.
    </Typography>
  </Stack>
  <Referenssimaara/>
  <Box sx={{width:{xs:'100%',lg:'85%'}, margin:'auto'}}>
  <DataTable/>
  </Box>
{/*   
  <Typography>
  Asuinkerrostalot ja hoivakodit
    </Typography>
    <Typography>
    Toimistorakennukset
    </Typography>
    <Typography>
    Myymälät
    </Typography>
    <Typography>
    Omakotitalot
    </Typography>
    <Typography>
    Mökit ja huvilat, myös suojellut rakennukset
    </Typography>
    <Typography>
    Kirkot
    </Typography>
    <Typography>
    Pyynnöstä voimme toimittaa tarkemman referenssiluettelon suunnittelemastamme kohteista.
    </Typography> */}
</Stack>
  
  <Typography variant='h3' sx={{ justifySelf:'center', alignSelf:'center', p:10}}>
  Sertifikaatit
</Typography>

  </Box>
  )
}

export default Meista

