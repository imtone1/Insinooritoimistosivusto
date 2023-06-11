import React from 'react'
import { Box, Stack, Typography} from '@mui/material'
import { COLORS } from '../values/colors'


const Palveluitamme = () => {
  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey}}>
        <Stack direction={'column'} alignItems={'center'} p={{md:2, xs:2}}>
          
        <Typography variant='h3' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px'}}>Palveluitamme</Typography>
        
        <Typography sx={{pb:'20px'}}>
        Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
        </Typography>
        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="6" style={{transform:'translateY(40px)'}}>
  <line x1="2" y1="0.5" x2="139" y2="0.5" stroke="black" strokeWidth="6" />
</svg>


      
        </Stack>
       <Box sx={{ textAlign:'right',transform:'translateX(-80px) translateY(10px)'}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="245" height="6" >
  <line x1="2" y1="0.5" x2="245" y2="0.5" stroke="black" strokeWidth="6"  />
</svg>
</Box> 
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'center'} p={{md:3, xs:2}} marginLeft={'2%'} marginRight={'2%'}>

        {/* <svg width="20%" height="40%" viewBox="0 0 113 336" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M4.604 1.00008L4.00018 332L112 332.197" stroke="black" strokeWidth="6"/>
</svg> */}
<svg xmlns="http://www.w3.org/2000/svg" width="6" height="350">
  <line x1="3" y1="0" x2="3" y2="350" stroke="black" strokeWidth="6" style={{transform:'translateX(-2px)'}} />
</svg>
            <Stack direction={'column'}  gap={10} p={5} minWidth={'27%'}>
                <Typography variant='h4' fontWeight={600}  >
                    LVIA-suunnittelu
                </Typography>
                <Typography  >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>

            <Stack direction={'column'} gap={10} p={5} minWidth={'27%'}>
                <Typography variant='h4'  fontWeight={600} >
                Projektijohto- ja valvonta tehtävät
                </Typography>
                <Typography >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>

            <Stack direction={'column'} gap={10} p={5} minWidth={'27%'}>
                <Typography variant='h4'fontWeight={600} >
                KVV/IV vastaavan työnjohtajan palvelut
                </Typography>
                <Typography >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="350" style={{transform:'translateX(-20px) translateY(-10px)'}}>
  <line x1="3" y1="0" x2="3" y2="350" stroke="black" strokeWidth="6"  />
</svg>
        
      

        </Stack>
           <svg xmlns="http://www.w3.org/2000/svg" width="245" height="6" style={{transform:'translateX(40px) translateY(-20px)'}}>
  <line x1="30" y1="0.5" x2="245" y2="0.5" stroke="black" strokeWidth="6"  />
</svg>

    </Box>
  )
}

export default Palveluitamme