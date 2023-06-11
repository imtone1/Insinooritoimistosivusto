import React from 'react'
import { Box, Stack, Typography} from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import { COLORS } from '../values/colors'

const customTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.grey,
    },
    secondary: {
      main: COLORS.light_gray,
    },
    white: {
      main: COLORS.white,
    },
  },
});

const StyledAvatar = styled(Box)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.03);
  }
  `}
`;

const StyledButton = styled(Box)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.white.main};
    transform: scale(1.03);
  }
  `}
`;

const Palveluitamme = () => {
  return (
    <Box className="boxit" sx={{backgroundColor:COLORS.grey}}>
        <Stack direction={'column'} alignItems={'center'} p={{md:2, xs:2}}>
          
        <Typography variant='h3' sx={{textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px'}}>Palveluitamme</Typography>
        
        <Typography p={{md:3, xs:2}} marginLeft={'2%'} marginRight={'2%'} >
        Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
        </Typography>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="139" height="6" style={{transform:'translateY(40px)'}}>
  <line x1="2" y1="0.5" x2="139" y2="0.5" stroke="black" strokeWidth="6" />
</svg> */}


      
        </Stack>
       <Box sx={{ textAlign:'right',transform:'translateX(-80px) translateY(10px)', }}>
     <svg xmlns="http://www.w3.org/2000/svg" width="240" height="6">
  <line x1="2" y1="0.5" x2="240" y2="0.5" stroke="black" strokeWidth="6"  />
</svg>
</Box> 
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'center'} p={{md:3, xs:2}} marginLeft={'2%'} marginRight={'2%'} >

        {/* <svg width="20%" height="40%" viewBox="0 0 113 336" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M4.604 1.00008L4.00018 332L112 332.197" stroke="black" strokeWidth="6"/>
</svg> */}
<Box sx={{display:{xs:'none', md:'flex',transform:'translateX(-2px)'}}}>
<svg xmlns="http://www.w3.org/2000/svg" width="6" height="350" >
  <line x1="3" y1="0" x2="3" y2="350" stroke="black" strokeWidth="6" />
</svg>
</Box>
<ThemeProvider theme={customTheme}>
<StyledAvatar>

            <Stack direction={'column'}  gap={{xs:4, sm:10}} p={5} minWidth={'27%'}>
                <Typography variant='h4' fontWeight={600}  >
                    LVIA-suunnittelu
                </Typography>
                <Typography  >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>
</StyledAvatar>
</ThemeProvider>

<ThemeProvider theme={customTheme}>
<StyledAvatar>

            <Stack direction={'column'} gap={{xs:4, sm:10}} p={5} minWidth={'27%'}>
                <Typography variant='h4'  fontWeight={600} >
                Projektijohto- ja valvonta tehtävät
                </Typography>
                <Typography >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>
            </StyledAvatar>
</ThemeProvider>

<ThemeProvider theme={customTheme}>
<StyledAvatar>
            <Stack direction={'column'} gap={{xs:4, sm:10}} p={5} minWidth={'27%'}>
                <Typography variant='h4'fontWeight={600} >
                KVV/IV vastaavan työnjohtajan palvelut
                </Typography>
                <Typography >
                Rakennuksen käyttö- ja elinkaarikustannukset riippuvat täysin LVI-suunnittelun onnistumisesta.
                </Typography>
            </Stack>

            </StyledAvatar>
</ThemeProvider>
<Box sx={{display:{xs:'none', md:'flex',transform:'translateX(-20px) translateY(-10px)'}}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="350" >
  <line x1="3" y1="0" x2="3" y2="350" stroke="black" strokeWidth="6"  />
</svg>
        
      </Box>

        </Stack>
        <Box sx={{display:{xs:'none', md:'flex',transform:'translateX(40px) translateY(-20px)'}}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="245" height="6" >
  <line x1="30" y1="0.5" x2="245" y2="0.5" stroke="black" strokeWidth="6"  />
</svg>
</Box>

<Box sx={{border:'solid 4px', p:2, width:'101px', alignItems:'center', display:'block', margin:'auto' ,transform: {sm:'translateY(-50px)'}}}>
<ThemeProvider theme={customTheme}>
<StyledButton>

<Box sx={{border:'solid 4px', p:2, width:'101px',   margin:'auto'}}>
<Typography variant='body2' >Lue lisää</Typography>
</Box>

</StyledButton>
</ThemeProvider>
</Box>

    </Box>
  )
}

export default Palveluitamme