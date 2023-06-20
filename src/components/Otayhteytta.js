import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Paaotsikko from '../otsikot/Paaotsikko'
import table from '../images/table3.png'


const Otayhteytta = () => {
  return (
    <Box aria-describedby='otayhteytta' className="boxit" sx={{backgroundImage: `url(${table})`, backgroundRepeat: 'no-repeat', backgroundSize:'contain' }}>
        
       
          <Paaotsikko id='otayhteytta' otsikko={'Ota yhteyttä'} teksti={'Voit ottaa yhteyttä sinulle sopivammalla tavalla. Vastaamme päivästä riippumatta.'}/>
          <Stack direction={{xs:'column', md:'row'}} sx={{gap:5}} justifyContent="center" alignItems={'center'}>
          <a href="tel:0406772400"><Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'} sx={{
           backgroundColor:{xs:'#ececee', md:'transparent'}, boxShadow:'3px 5px 8px #888888',borderRadius:4, padding:1}} >
          <PhoneInTalkIcon sx={{fontSize:'50px'}}/>
          <Typography sx={{fontWeight:700
    }}>
          040 677 24 00
          </Typography>
          </Stack></a>
          <a href="mailto:info@sapair.fi &subject=Tarjouspyyntö SapAir Oy">  <Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'} sx={{
           backgroundColor:{xs:'#ececee', md:'transparent'}, boxShadow:'3px 5px 8px #888888',borderRadius:4, padding:1}}>
          <MailIcon sx={{fontSize:'50px'}}/>
          <Typography sx={{fontWeight:700}}>
          info@sapair.fi
          </Typography>
          </Stack></a>
          <a href="tel:0440190987"> <Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'} sx={{
           backgroundColor:{xs:'#ececee', md:'transparent'}, boxShadow:'3px 5px 8px #888888',borderRadius:4, padding:1}}>
          <WhatsAppIcon sx={{fontSize:'50px'}}/>
          <Typography sx={{fontWeight:700}}>
          044 019 09 87
          </Typography>
          </Stack></a>
        
</Stack>

    </Box>

  )
}

export default Otayhteytta