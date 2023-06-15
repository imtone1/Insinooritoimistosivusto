import React from 'react'
import { Stack, Typography, Box } from '@mui/material'

import Rivitys from '../otsikot/Rivitys'

const Polkuitem = ({kuva, numero, otsikko1, otsikko2, teksti}) => {
 
  return (
    <Stack component={'div'} direction={{xs:'column', md:'row'}} sx={{width:{xs:'100%',md:'80%'}, gap:3}} >
    {/* <Typography variant="h3" sx={{fontWeight:'800' , fontSize:'400%', borderTop:`3px solid ${COLORS.brown}`, borderLeft:`3px solid ${COLORS.brown}`, padding:3 }}>
       {numero}
    </Typography> */}
    <Stack direction={'column'} >
    <Rivitys osa1={otsikko1} osa2={otsikko2} varianti={'h5'}/>
 
    <Typography sx={{width:'100%'}}>
    {teksti}
    </Typography>

    </Stack>
    <Box sx={{width:{xs:'50%',md:'100%'}}}>
<img src={kuva} alt="meeting" width={'100%'} />
</Box>
</Stack>
  )
}

export default Polkuitem