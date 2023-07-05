import React from 'react'
import SEO from '../components/SEO'

import { COLORS } from '../values/colors'

import { Box, Stack, Typography } from '@mui/material'
import Konsta from '../kuvat/Konsta-Sappinen.png'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import MailIcon from '@mui/icons-material/Mail'
import ReceiptIcon from '@mui/icons-material/Receipt'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import coffee from '../images/coffee.png'
import Sivuotsikko from '../otsikot/Sivuotsikko'

const Yhteystiedot = () => {
  return (
    <Box  sx={{ backgroundColor:COLORS.grey }}>
      <SEO title={'SapAir Oy - Yhteystiedot'} description={'SapAir Oy:n yhteystiedot. Säästä itseäsi turhilta huolilta ja kustannuksilta, ota yhteyttä jo tänään.'}/>


      <Sivuotsikko otsikko={'Yhteystiedot'} alaotsikko={'Voit ottaa yhteyttä sinulle sopivammalla tavalla'} alaotsikko2={'Vastaamme päivästä riippumatta'}/>


      <Stack role='article' direction={{ xs:'column-reverse', sm:'row' }} justifyContent={'center'} alignItems={'center'}>
        <Stack direction={'column'} sx={{ gap:3, p:2 }}>
          <Stack direction={'row'} alignItems='center'>
            <Typography variant='body1' sx={{ fontSize:'190%' }}>
          Konsta Sappinen
            </Typography>
            <LinkedInIcon fontSize='large'aria-describedby="new-window-Linkedin" onClick={() =>
              window.open('https://www.linkedin.com/in/konsta-sappinen-364ba575/')} >
            </LinkedInIcon>
          </Stack>
          <Typography variant='h5'>
        Vastaava LVIA-suunnittelija
          </Typography>
          <Typography variant='h5'>
        Toimitusjohtaja
          </Typography>
          <Stack direction={'column'} gap={2}>
            <a href="tel:0440190987"><Stack direction={'row'} gap={1}>
              <PhoneInTalkIcon/>
              <Typography >
              044 019 09 87
              </Typography>
            </Stack></a>
            <a href="mailto:konsta.sappinen@sapair.fi"><Stack direction={'row'} gap={1} >
              <MailIcon/>
              <Typography >
              konsta.sappinen@sapair.fi
              </Typography>
            </Stack></a>

          </Stack>

        </Stack>
        <Box  className='konstakuva' sx={{ maxWidth:200, alignSelf:'center', justifySelf:'center' , marginX:{ lg: 5 } }}>
          <img src={Konsta} alt="Konsta-Sappinen" width={'100%'} height={'auto'} loading='lazy'/>
        </Box>
        <Stack direction={'column'} sx={{ gap:3, p:2 }}>
          <Typography variant='body1' sx={{ fontSize:'190%' }}>
          Toimisto
          </Typography>
          <Typography>Helmikuja 3, 21310 Vahto</Typography>
          <a href="tel:0406772400"><Stack direction={'row'} gap={1}>
            <PhoneInTalkIcon/>
            <Typography >
              040 677 24 00
            </Typography>
          </Stack></a>
          <a href="mailto:info@sapair.fi">  <Stack direction={'row'} gap={1} >
            <MailIcon/>
            <Typography >
              info@sapair.fi
            </Typography>
          </Stack></a>
          <Stack>
            <Stack direction={'row'} gap={1} >
              <ReceiptIcon/>
              <Typography sx={{ fontWeight:600 }}>
              Verkkolaskutusosoite
              </Typography>
            </Stack>
            <Typography >
              (OVT -tunnus): 003732452036
            </Typography>
            <Typography >
              Operaattori: Apix Messaging Oy
            </Typography>
            <Typography >
              Operaattoritunnus: 003723327487
            </Typography>
            <Typography sx={{ maxWidth:300, pt:5 }} >
              Emme vastaanota paperilaskuja. Mikäli verkkolaskun toimitus ei ole mahdollista, voi laskun toimittaa sovitusti myös sähköisesti osoitteeseen info@sapair.fi
            </Typography>
          </Stack>
        </Stack>
      </Stack>


    </Box>

  )
}

export default Yhteystiedot