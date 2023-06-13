import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import logo_SA1 from '../images/logo_SA1.png'
import jasenyritys from '../images/jasenyritys_2022.png'
import LK_valkoinen from '../images/LK_valkoinen.png'

import {COLORS} from '../values/colors'

const Footer = () => {
  return (
    <Box className='boxit' sx={{backgroundColor: COLORS.beige1}}>

        <Stack direction={{xs:'column', md:'row'}} gap={{xs: 5,md:20}} alignItems={'center'}>
        <Box sx={{padding:{xs:2, lg:10}}}>
            <img src={logo_SA1} alt="logo" style={{width:'200px'}}/>
        </Box>
        <Stack direction={'column'} gap={5}>
        <Typography >
            Meistä
        </Typography>
        <Typography>
            Referenssit
        </Typography>
        <Typography>
            Yhteystiedot
        </Typography>
        </Stack>
        <Stack direction={'column'} gap={5}>
        <Typography >
            Palvelut
        </Typography>
        <Typography >
            Ammattilaisille
        </Typography>
        <Typography >
            Laskutus
        </Typography>
        </Stack>
        <Stack direction={'column'} gap={5}>
            <img src={jasenyritys} alt="jasenyritys" style={{width:'150px'}}/>
            <img src={LK_valkoinen} alt="LK_valkoinen" style={{width:'150px'}}/>
            </Stack>
        </Stack>
<Typography sx={{textAlign:'center', paddingTop:5}}>
    SapAir Oy | Y-tunnus: 3245203-6 | Osoite Helmikuja 3, 21310 Vahto
    </Typography>
    </Box>
  )
}

export default Footer