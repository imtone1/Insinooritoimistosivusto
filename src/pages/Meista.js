import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import SEO from '../components/SEO'
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
 <SEO title={'SapAir Oy - Meistä'} description={'SapAir Oy:n esittelysivu. Katso tärkeimmät referenssimme ja arvomme.'}/>
 <section className="layers" >
  <Box className="layers__container" sx={{height:'20vh', minHeight:200}} >
    <div className="layers__item layer-1" style={{backgroundImage: `url(${coffee})`, transform: 'translateZ(95px) scale(0.90)'}}></div>
    
    <div className="layers__item layer-3" style={{transform: 'translateZ(180px) scale(.8)'}}>
      <div className="otsikko2-content">
        <h2>SapAir Oy</h2>
        <h3 className="otsikko2-content__p">Asiantunteva LVIA-suunnittelija palveluksessasi</h3>
        
        
      </div>
    </div>

    
  </Box>
</section>

    <Stack direction={'column'} sx={{gap:2, justifyContent:'center', alignItems:'center', width:'70%', margin:'auto'}}>
      <Stack sx={{paddingTop:5, gap:3, paddingBottom:5}}>
<Typography >
SapAir on aloittanut toimintansa vuonna 2015 toiminimellä. Toiminnan kasvaessa olemme siirtyneet osakeyhtiömuotoon syksyllä 2021. Nykyinen nimi on Insinööritoimisto SapAir Oy. Toimialueemme on koko Suomi. 
</Typography>

<Typography>
SapAir palvelee asiakkaita niin tavanomaisissa, kuin vaativissakin projekteissa. Olemme pieni ja ketterä suunnittelutoimisto, jossa asiointi on sujuvaa ja nopeaa.
</Typography>
</Stack>
<Box sx={{ textAlign:'right'}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="240" height="6">
  <line x1="2" y1="0.5" x2="240" y2="0.5" stroke="black" strokeWidth="6"  />
</svg>
</Box> 
<p className='otsikko2-content__p'>
Suunnittelemme energiatehokkaita rakennuksia yksityisille, yrityksille ja taloyhtiöille. 
</p>
<Box sx={{ textAlign:'right', }}>
     <svg xmlns="http://www.w3.org/2000/svg" width="120" height="6">
  <line x1="2" y1="0.5" x2="120" y2="0.5" stroke="black" strokeWidth="6"  />
</svg>
</Box> 

    </Stack>
<Stack direction={'column'} sx={{gap:3, justifyContent:'center', alignItems:'center', pt:6}}>

<div className='boxicontainer'style={{margin:0, maxWidth:900}}>
            <div className='boxi'>
              <div className='coverboxi'></div>
              <div className='shadow'></div>
              <div className='sisalto' >
                <div className='tekstiboxi'>
                <Stack direction={'row'} sx={{ justifyContent:'center', alignItems:'center',p:{xs:2}}}>
  <Typography variant='h3' >
    Konsta Sappinen
  </Typography>
  <LinkedInIcon fontSize='large' onClick={event =>  window.location.href='https://www.linkedin.com/in/konsta-sappinen-364ba575/'} aria-label="Linkki Konsta Sappisen Linkedin-sivulle"/>
</Stack>
<Typography variant='h5' sx={{ textAlign:'center'}}>
        Vastaava LVIA-suunnittelija, Toimitusjohtaja
          </Typography>
          <Stack direction={{xs:'column',md:'row'}} gap={2}>
          <a href="tel:0440190987">  <Stack direction={'row'} gap={1}>
              <PhoneInTalkIcon/>
              <Typography >
              044 019 09 87
              </Typography>
              </Stack></a>
              <a href="mailto:info@sapair.fi">  <Stack direction={'row'} gap={1}  >
              <MailIcon/>
              <Typography >
              konsta.sappinen@sapair.fi
              </Typography>
              </Stack></a>
    
          </Stack>
          <Box sx={{maxwidth:400}} className='konstakuva'>
  <img src={Konsta} alt="Konsta-Sappinen" width={'100%'} height={'auto'}/>
</Box><Koulutusaccordion/>
                </div>
              </div>
            </div>
          </div>




</Stack>

<Stack direction={'column'} sx={{ gap:3, pt:5}}>

<div className='boxicontainer' style={{maxWidth:900, margin:'auto'}}>
            <div className='boxi'>
              <div className='coverboxi'></div>
              <div className='shadow'></div>
              <div className='sisalto'>
                <div className='tekstiboxi'>
                <Stack sx={{ justifyContent:'center', alignItems:'center', p:2}}>
    <Typography variant='h3' sx={{ textAlign:'center'}} >
    Suunnittelijan referenssit
    </Typography>
    <Typography sx={{ justifySelf:'center', alignSelf:'center'}}>
      Puhutkoon työnjälki puolestaan. Tutustu alla oleviin suunnittelijan referensseihin ja vakuutu laadusta.
    </Typography>
  </Stack>

  
                </div>
              </div>
            </div>
          </div>
  
 
  <Box sx={{width:{xs:'100%',lg:'85%'}, margin:'auto'}}>
  <DataTable/>
  </Box>

</Stack>
  
<Stack sx={{width:{xs:'100%', lg:'900px'}, margin: 'auto' , marginTop:5}}>
  {/* <Typography variant='h3' sx={{ justifySelf:'center', alignSelf:'center', p:10}}>
  Arvojamme
</Typography> */}
 <div className='boxicontainer'>
            <div className='boxi'>
              <div className='coverboxi'></div>
              <div className='shadow'></div>
              <div className='sisalto'>
                <div className='tekstiboxi'>
                  <Typography variant='h3' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px'}}>Arvojamme</Typography>
                  <Typography p={{md:3, xs:2}} maxWidth={800} textAlign={'center'} >
                
                  </Typography>
                  <Accordions/>
                </div>
              </div>
            </div>
          </div>

 
</Stack>

  </Box>
  )
}

export default Meista

