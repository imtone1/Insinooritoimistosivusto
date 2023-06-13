import React from 'react'
import { Link } from 'react-router-dom';
import {AppBar,Toolbar, Typography,Stack, Box} from "@mui/material"
import {COLORS} from '../values/colors'

import Menu from './Menuni'

import logo_SA1 from '../images/logo_SA1.png'
import phone_volume_icon from '../images/phone-volume_icon.png'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position='sticky' style={{ background: COLORS.light_gray , height:70, width:'100%,' ,justifyContent:'center', color:'black'}}>
        <Toolbar>
     
      <Box sx={{ flexGrow: 1}} >
           <Link to="/">   
 <img src={logo_SA1} alt="SapAir logo" width="150" />

            </Link>
           
            </Box>
           {/* <Box sx={{display:{xs:'none', md:'flex', mr: '2%'}}}>
            <IconButton component={Link} to="/" size='large' edge='start' color="inherit"
            aria-label="menu"
            >

            
                <HouseIcon/>
            </IconButton>
            </Box> */}
            <Stack direction={'row'} gap={2} display={{xs:'none', md:'flex'}} alignItems={'center'}  >
            <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                Ammattilaisille
            </Typography>

            <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                Palvelut
            </Typography>
            <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                Meistä
            </Typography>
            <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                Yhteystiedot
            </Typography>
            <Stack direction={'row'} gap={2} display={{xs:'none', sm:'flex'}} alignItems={'center'} >
            <img src={phone_volume_icon} alt="phone volume icon" width="33" style={{flexGrow:1}}/>
            <Typography variant='h6' component='div' sx={{flexGrow:1, fontWeight:600}} >
            040 6772400
            </Typography>
            </Stack>
            </Stack>
                
                      
         <Menu/> 
           
        </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar