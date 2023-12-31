import React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import MailIcon from '@mui/icons-material/Mail'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import table from '../images/table3.png'
import tablemobile from '../images/tablemobile.png'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
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
})



const StyledButton = styled(Box)`
  ${({ theme }) => `
  cursor: pointer;
 
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
   
    transform: scale(1.06);
  }
  `}
`

const Otayhteyttanappulassa = () => {
  return (

    // <Box aria-describedby='otayhteytta' className="boxit" sx={{ backgroundImage: { xs:'none', md:`url(${table})` }, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', maxWidth:2000, margin:'auto', marginBottom:10 }}>
    <Box aria-describedby='otayhteytta' sx={{ maxWidth:2000, margin:'auto', marginBottom:20, position:'relative', paddingBottom: 20 }}>

      <div className='boxicontainer' style={{ marginTop:5, marginBottom:10, maxWidth:800, margin:'auto' }}>
        <div className='boxi'>
          <div className='coverboxi'></div>
          <div className='shadow'></div>
          <div className='sisalto'>
            <div className='tekstiboxi'>
              <Typography variant='h3' id='otayhteytta' sx={{ textShadow: '1px 1px rgb(99, 99, 99)', textTransform:'uppercase', fontWeight:'600' , fontSize:'200%', pb:'20px' }}>Ota yhteyttä</Typography>
              <Typography p={{ md:3, xs:2 }} >
          Voit ottaa yhteyttä sinulle sopivimmalla tavalla. Vastaamme viikkopäivästä riippumatta.
              </Typography>
              <Stack direction={{ xs:'column', md:'row' }} sx={{ gap:5, paddingTop:5 }} justifyContent="center" alignItems={'center'}>
                <ThemeProvider theme={customTheme}>
                  <StyledButton aria-label='SapAir Oy puhelinnumero'>
                    <a href="tel:0406772400" style={{ textDecoration:'none' }}><Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'} sx={{
                      backgroundColor:{ xs:'#ececee', md:'transparent' }, padding:1,  boxShadow:`5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1),
   20px 10px 20px rgba(0,0,0,0.1),
   50px 50px 80px rgba(0,0,0,0.25),
   inset 3px 3px 2px #fff`,borderRadius:2 }} >
                      <PhoneInTalkIcon sx={{ fontSize:'50px', marginTop:2 }}/>
                      <Typography sx={{ fontWeight:700
                      }}>
  040 677 24 00
                      </Typography>
                    </Stack></a>
                  </StyledButton>
                </ThemeProvider>

                <ThemeProvider theme={customTheme}>
                  <StyledButton aria-label='SapAir Oy sähköposti'>
                    <a href="mailto:info@sapair.fi" style={{ textDecoration:'none' }}>  <Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'} sx={{
                      backgroundColor:{ xs:'#ececee', md:'transparent' }, padding:1, boxShadow:`5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1),
   20px 10px 20px rgba(0,0,0,0.1),
   50px 50px 80px rgba(0,0,0,0.25),
   inset 3px 3px 2px #fff`,borderRadius:2 }}>
                      <MailIcon sx={{ fontSize:'50px', marginTop:2 }}/>
                      <Typography sx={{ fontWeight:700 }}>
  info@sapair.fi
                      </Typography>
                    </Stack></a>
                  </StyledButton>
                </ThemeProvider>
                <ThemeProvider theme={customTheme}>
                  <StyledButton aria-label='SapAir Oy whatsapp-numero'>
                    <a href="tel:0440190987" style={{ textDecoration:'none' }}> <Stack direction={'column'} gap={2} justifyContent="center" alignItems={'center'} sx={{
                      backgroundColor:{ xs:'#ececee', md:'transparent' }, boxShadow:`5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1),
   20px 10px 20px rgba(0,0,0,0.1),
   50px 50px 80px rgba(0,0,0,0.25),
   inset 3px 3px 2px #fff`,borderRadius:2, padding:1, zIndex:200 }}>
                      <WhatsAppIcon sx={{ fontSize:'50px', marginTop:2 }}/>
                      <Typography sx={{ fontWeight:700 }}>
  044 019 09 87
                      </Typography>
                    </Stack></a>
                  </StyledButton>
                </ThemeProvider>
              </Stack>
            </div>

          </div>
        </div>
      </div>

      <picture>
        <source media="(max-width: 800px)" srcSet={tablemobile}  alt='kynät purkissa kirjojen päällä' />
        <source media="(min-width: 1250px)" srcSet={table} alt='kynät purkissa kirjojen päällä' />
        <img src={tablemobile} alt='kynät purkissa kirjojen päällä' style={{ position:'absolute', width:'auto', overflow:'hidden', bottom:-100, right:0 , zIndex:10 }} loading='lazy' />
      </picture>


    </Box>

  )
}

export default Otayhteyttanappulassa