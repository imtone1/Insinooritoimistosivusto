import React from 'react'
import { Box, Stack} from '@mui/material'
import {COLORS} from '../values/colors'
import talo_kuva from '../images/Talo_IV.png'
import Kolmio from './Kolmio'


const Talopalvelu = () => {
  return (
    <Box sx={{backgroundColor: COLORS.beige1, position:'relative'}}>
        <Stack direction={{sm:'column',md:'row'}} alignItems={'flex-end'} justifyContent={'center'} >
        <Box sx={{width:{sm:'100%',md:'40%'}}}>
        <img src={talo_kuva} alt="talo_kuva" width={{sm:'100%',md:'40%'}} height='auto' zindex={10} /></Box>
       {/* <Stack direction={{md:'column',lg:'row'}} p={{md:2, xs:2}} width={{lg:'30%'}}
       sx={{borderLeft:`3px solid ${COLORS.brown}`, backgroundColor:COLORS.grey}} justifyContent={'center'} >
       
     <Box sx={{display:{xs:'none', md:'flex', transform:{md: 'translateY(40%)', lg:'translateY(10%)'}}}}>
<svg xmlns="http://www.w3.org/2000/svg" width="6" height="120" >
  <line x1="3" y1="0" x2="3" y2="120" stroke="black" strokeWidth="6" />
</svg>
</Box> 
       <Stack direction={'column'} gap={2} pl={6}>
         <Typography variant='h6' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' ,  textAlign:'left'}}>Haluamme taata asiakkaille heidän toivoman palvelun</Typography>
         <Typography>
              Palvelupolkumme on suunniteltu niin, että tavoitteesi pysyy aina kaikille kirkkaana mielessä.
              </Typography> 
       </Stack>

        </Stack> */}
        </Stack>
        <Kolmio/>   
    </Box>
  )
}

export default Talopalvelu