import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar,Toolbar, Typography,Stack, Box } from '@mui/material'
import { ReactComponent as SAlogo } from '../kuvat/logo_SA1.svg'

import Menu from './Menuni'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'


const Navbar = () => {
  return (
    <nav>
      <AppBar position='sticky' style={{ background:'transparent', height:70, width:'100%,' ,justifyContent:'center', color:'black' }}>
        <Toolbar>

          <Box sx={{ flexGrow: 1 }} >
            <Link to="/" aria-label="SapAir Oy Etusivu">

              <SAlogo style={{ width:'150px' }}/>

            </Link>

          </Box>
          {/* <Box sx={{display:{xs:'none', md:'flex', mr: '2%'}}}>
            <IconButton component={Link} to="/" size='large' edge='start' color="inherit"
            aria-label="menu"
            >


                <HouseIcon/>
            </IconButton>
            </Box> */}
          <Stack direction={'row'} gap={2} display={{ xs:'none', md:'flex' }} alignItems={'center'}  >
            {/* <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                Ammattilaisille
            </Typography> */}

            <Link to={'/palvelut'} style={{ textDecoration:'none' }} onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'instant',
              })
            }}>
              <Typography variant='h6' component='div' sx={{ flexGrow:1 }} >
                    Palvelut
              </Typography>
            </Link>
            <Link to={'/meista'} style={{ textDecoration:'none' }} onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'instant',
              })
            }}>
              <Typography variant='h6' component='div' sx={{ flexGrow:1 }} id='meista'>
                    Meistä
              </Typography>
            </Link>
            <Link to={'/yhteystiedot'} style={{ textDecoration:'none' }} onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'instant',
              })
            }}>
              <Typography variant='h6' component='div' sx={{ flexGrow:1 }} >
                    Yhteystiedot
              </Typography>
            </Link>
            <a href="tel:0406772400" style={{ textDecoration:'none' }}>  <Stack direction={'row'} gap={2} display={{ xs:'none', sm:'flex' }} alignItems={'center'} aria-labelledby="SapAir Oy puhelinnumero">
              <PhoneInTalkIcon />

              <Typography variant='body1' component='div' sx={{ flexGrow:1, fontWeight:600, fontSize:'120%' }} id='SapAir Oy puhelinnumero'  >
            040 6772400
              </Typography>
            </Stack></a>
          </Stack>


          <Menu/>

        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default Navbar