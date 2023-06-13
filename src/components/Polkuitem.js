import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import {COLORS} from '../values/colors'

const Polkuitem = ({kuva, numero, otsikko, teksti}) => {
 
  return (
    <Stack component={'div'} direction={{xs:'column', md:'row'}} sx={{width:'80%', gap:3}} >
    <Typography variant="h3" sx={{fontWeight:'800' , fontSize:'400%', borderTop:`3px solid ${COLORS.brown}`, borderLeft:`3px solid ${COLORS.brown}`, padding:3 }}>
       {numero}
    </Typography>
    <Stack direction={'column'} >
    
    <Typography variant='h5' sx={{ fontWeight:'600' , pb:'20px' }}>
        {otsikko}
    </Typography>
    <Typography>
    {teksti}
    </Typography>

    </Stack>
    <Box>
<img src={kuva} alt="meeting" width={'80%'} />
</Box>
</Stack>
  )
}

export default Polkuitem