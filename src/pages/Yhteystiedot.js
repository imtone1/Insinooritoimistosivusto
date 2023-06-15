import React from 'react'
import Paaotsikko from '../otsikot/Paaotsikko'

import {COLORS} from '../values/colors'

import { Box, Stack, Typography } from '@mui/material'
import Konsta from '../images/Konsta-Sappinen.png'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Yhteystiedot = () => {
  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey  }}>
    <Paaotsikko otsikko={'Yhteystiedot'} teksti={'Voit ottaa yhteyttä sinulle sopivammalla tavalla. Vastaamme päivästä riippumatta.'}/>
  
  <Stack>
    <Stack direction={{xs:'column', sm:'row'}} justifyContent={'center'} alignItems={'center'}>
      <Stack direction={'column'} gap={3} p={2}>
        <Stack direction={'row'} alignItems='center'>
        <Typography variant='h3'>
          Konsta Sappinen
        </Typography>
        <LinkedInIcon fontSize='large' onClick={event =>  window.location.href='https://www.linkedin.com/in/konsta-sappinen-364ba575/'} />
        </Stack>
        <Typography variant='h5'>
        Vastaava LVIA-suunnittelija
          </Typography>
          <Typography variant='h5'>
        Toimitusjohtaja
          </Typography>
          <Stack direction={'column'} gap={2}>
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

    </Stack>
        <Box sx={{width:'50%'}}>
          <img src={Konsta} alt="Konsta-Sappinen" width={'100%'} />
        </Box>
        <Stack direction={'column'} gap={3} p={2}>
          <Typography variant='h3'>
          Toimisto
          </Typography>
          <Typography>Helmikuja 3, 21310 Vahto</Typography>
          <Stack direction={'row'} gap={1}>
              <PhoneInTalkIcon/>
              <Typography >
              040 677 24 00
              </Typography>
              </Stack>
              <Stack direction={'row'} gap={1} >
              <MailIcon/>
              <Typography >
              info@sapair.fi
              </Typography>
              </Stack>
      <Stack>
              <Stack direction={'row'} gap={1} >
              <ReceiptIcon/>
              <Typography sx={{fontWeight:600}}>
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
              <Typography sx={{width:200, pt:5}} >
              Mikäli verkkolaskun toimitus ei ole mahdollista, voi laskun toimittaa sovitusti myös sähköisesti osoitteeseen info@sapair.fi
    Emme vastaanota paperilaskuja.
    </Typography>
    </Stack>
        </Stack>
    </Stack>
  </Stack>

  </Box>
  
  )
}

export default Yhteystiedot