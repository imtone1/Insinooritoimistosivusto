import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Rivitys from '../otsikot/Rivitys'
import {COLORS} from '../values/colors'

const Lupauksemme = () => {
  return (
   <Box className="boxit" sx={{backgroundColor: COLORS.beige1 }}>

 <Stack direction={'column'} alignItems={'center'} p={{md:2, xs:2}} >
          
          <Typography variant='h3' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px'}}>Lupauksemme</Typography>
          
          <Typography p={{md:3, xs:2}} maxWidth={800} textAlign={'center'} >
          Luottamuksenne on arvokkain voimavaramme! Sitoudumme tinkimättömään laatuun ja asiakkaan tyytyväisyyteen jokaisessa kohtaamisessa.
          </Typography>
          </Stack>

<Box sx={{maxWidth:'80%', margin:'auto', justifyContent:"center",
  alignItems:{xs:'flex-start', md:"center"}}}>
<Stack direction={{xs:'column-reverse', md:'row'}} justifyContent="space-between"
  alignItems="center" maxWidth={900} margin={'auto'}>
    <Stack direction={'column'} p={{md:2, xs:2}} className='lupaukset' maxWidth={600}>
    <Typography variant = 'h4' sx={{ fontWeight:'600' , pb:'20px' ,}}>Läpinäkyvyys</Typography>
    <Typography>
    Toimintamme on läpinäkyvää ja avointa.
    Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.
    </Typography>
    </Stack>
    <Stack direction={'column'} p={{md:2, xs:2}} className='lupaukset'>
    <Typography variant='body2' sx={{border:3, padding:3, maxWidth:300, boxShadow:'2px 3px'}}>
    Luottamuksenne on arvokkain voimavaramme! Sitoudumme tinkimättömään laatuun ja asiakkaan tyytyväisyyteen jokaisessa kohtaamisessa.
    </Typography>
    </Stack>

   
</Stack>
<Stack direction={{xs:'column', md:'row'}} justifyContent="center"
  alignItems="center"  >
 <Stack direction={'column'} p={{md:2, xs:2}} className='lupaukset' >
    <Typography variant = 'h4' sx={{ fontWeight:'600' , pb:'20px'}}>Nopeus</Typography>
    <Typography>
    Toimintamme on läpinäkyvää ja avointa.
    Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.
    </Typography>
    </Stack>

    <Stack direction={'column'} p={{md:2, xs:2}} className='lupaukset'>
        <Stack direction={{xs:'column', sm:'row'}}>
            <Rivitys osa1={'Kustannus'} osa2={'tehokkuus'}/>

    </Stack>
    <Typography>
    Toimintamme on läpinäkyvää ja avointa.
    Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.
    </Typography>
    </Stack>
</Stack>
<Stack direction={{xs:'column', md:'row'}} justifyContent="center"
  alignItems="center">
 <Stack direction={'column'} p={{md:2, xs:2}} className='lupaukset'>
    <Typography variant = 'h4' sx={{ fontWeight:'600' , pb:'20px'}}>Korkea laatu</Typography>
    <Typography>
    Toimintamme on läpinäkyvää ja avointa.
    Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.
    </Typography>
    </Stack>

    <Stack direction={'column'} p={{md:2, xs:2}} className='lupaukset'>
    <Rivitys osa1={'Asiakas'} osa2={'lähtöisyys'}/>
    <Typography>
    Toimintamme on läpinäkyvää ja avointa.
    Näet kaiken dokumentaation kätevästi samassa paikassa modernin ohjelmiston avulla.
    </Typography>
    </Stack>
</Stack>
</Box>
    </Box>
  )
}

export default Lupauksemme