import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import Rivitys from '../otsikot/Rivitys'

const Polkuitem = ({ kuva, otsikko1, otsikko2, teksti }) => {

  return (
    <Stack component={'div'} direction={{ xs:'column', md:'row' }} sx={{ width:{ xs:'100%',md:'80%' }, gap:3 }} >

      <Stack direction={'column'} >
        <Rivitys osa1={otsikko1} osa2={otsikko2} varianti={'h5'}/>


        <Typography sx={{ width:'100%' }}>
          {teksti}
        </Typography>

      </Stack>
      <Box sx={{ width:{ xs:'50%', sm:'30%',lg:'100%' }, alignSelf:'center', pb:2 }}>
        <img src={kuva} alt="meeting" width={150} height={150} loading='lazy' />
      </Box>
    </Stack>
  )
}

export default Polkuitem