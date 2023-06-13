import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import {COLORS} from '../values/colors'

const Polkuitemoik = ({kuva}) => {
  return (
    <Stack component={'div'} direction={{xs:'column-reverse', md:'row'}} sx={{width:'80%', gap:3}} >
        
        <Box>
<img src={kuva} alt="meeting" width={'100%'} />
</Box>
    <Typography variant="h3" sx={{fontWeight:'800' , fontSize:'400%'}}>
        1.
    </Typography>
   
    <Stack direction={'column'} >
    
    <Typography variant='h5' sx={{ fontWeight:'600' , pb:'20px' }}>
        Aloitamme aina projektipalaverilla
    </Typography>
    <Typography>
    Istumme alas asiakkaan kanssa ja kuuntelemme tarkasti heidän ajatuksiaan käyttötarkoituksesta rakennukselle. Haluamme ymmärtää, millaisia tavoitteita heillä on ja mitä he haluavat saavuttaa.
    </Typography>

    </Stack>
   
</Stack>
  )
}

export default Polkuitemoik