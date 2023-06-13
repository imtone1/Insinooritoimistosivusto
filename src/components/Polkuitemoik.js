import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import {COLORS} from '../values/colors'

const Polkuitemoik = ({kuva, numero,otsikko, teksti }) => {


  return (
    <Stack component={'div'} direction={{xs:'column-reverse', md:'row'}} sx={{width:'80%', gap:3 ,borderRight:`3px solid ${COLORS.brown}`, padding:3}} >
        
        <Box>
<img src={kuva} alt="meeting" width={'70%'} />
</Box>
    <Typography variant="h3" sx={{fontWeight:'800' , fontSize:'400%'}}>
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
   
</Stack>
  )
}

export default Polkuitemoik