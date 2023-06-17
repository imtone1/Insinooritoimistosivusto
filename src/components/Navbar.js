import React from 'react'
import { Link } from 'react-router-dom';
import {AppBar,Toolbar, Typography,Stack, Box} from "@mui/material"
import {COLORS} from '../values/colors'

import Menu from './Menuni'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import logo_SA1 from '../images/logo_SA1.png'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position='sticky' style={{ background: COLORS.grey , height:70, width:'100%,' ,justifyContent:'center', color:'black'}}>
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
            {/* <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                Ammattilaisille
            </Typography> */}

            <Link to={'/palvelut'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
                <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                    Palvelut
                </Typography>
            </Link>
            <Link to={'/meista'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
                <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                    Meistä
                </Typography>
            </Link>
            <Link to={'/yhteystiedot'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
                <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                    Yhteystiedot
                </Typography>
            </Link>
            <Stack direction={'row'} gap={2} display={{xs:'none', sm:'flex'}} alignItems={'center'} >
            <PhoneInTalkIcon />

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