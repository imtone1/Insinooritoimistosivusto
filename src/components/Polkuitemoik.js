import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { COLORS } from '../values/colors'
import Rivitys from '../otsikot/Rivitys'

const Polkuitemoik = ({ kuva, numero,otsikko1, otsikko2, teksti }) => {


  return (
    <Stack component={'div'} direction={{ xs:'column', md:'row' }} sx={{ width:{ xs:'100%',md:'80%' }, gap:3 ,borderRight:`3px solid ${COLORS.brown}`, padding:3 }} >

      <Stack direction={{ xs:'column-reverse', md:'row' }}>
        <Box sx={{ pt:{ xs:2 }, paddingRight:{ xs:0,md:2 } }}>
          <img src={kuva} alt="meeting" width={150} height={150} loading='lazy'/>
        </Box>
        <Stack direction={'column'} >
          <Typography variant="h3" sx={{ fontWeight:'800' , fontSize:'400%' , padding:3 }}>
            {numero}
          </Typography>
          <Rivitys osa1={otsikko1} osa2={otsikko2} varianti={'h5'}/>

          <Typography sx={{ width:'80%' }}>
            {teksti}
          </Typography>

        </Stack>
      </Stack>
    </Stack>
  )
}

export default Polkuitemoik