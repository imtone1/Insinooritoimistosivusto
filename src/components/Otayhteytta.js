import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Paaotsikko from '../otsikot/Paaotsikko'

import {COLORS} from '../values/colors'

const Otayhteytta = () => {
  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey }}>
        <Paaotsikko otsikko={'Ota yhteyttä'} teksti={'Voit ottaa yhteyttä sinulle sopivammalla tavalla. Vastaamme päivästä riippumatta.'}/>
<Stack direction={{xs:'column', md:'row'}} sx={{gap:5}} justifyContent="center" alignItems={'center'}>
        <Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'}>
        <PhoneInTalkIcon sx={{fontSize:'50px'}}/>
        <Typography sx={{fontWeight:700}}>
        040 677 24 00
        </Typography>
        </Stack>

        <Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'}>
        <MailIcon sx={{fontSize:'50px'}}/>
        <Typography sx={{fontWeight:700}}>
        info@sapair.fi
        </Typography>
        </Stack>

        <Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'}>
        <WhatsAppIcon sx={{fontSize:'50px'}}/>
        <Typography sx={{fontWeight:700}}>
        040 677 24 00
        </Typography>
        </Stack>
</Stack>

    </Box>

  )
}

export default Otayhteytta