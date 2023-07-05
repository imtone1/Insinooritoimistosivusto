import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar,Toolbar, Typography,Stack, Box } from '@mui/material'
import { ReactComponent as SAlogo } from '../kuvat/logo_SA1.svg'

import Menu from './Menuni'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import HomeIcon from '@mui/icons-material/Home'

import { COLORS } from '../values/colors'

const Navbar = () => {
  return (

    <AppBar position='sticky' style={{ background: COLORS.creamy, height:60, width:'100%,' ,justifyContent:'center', color:'black' }}>
      <Toolbar>

        <Box sx={{ flexGrow: 1 }} >
          <Link to="/" aria-label="SapAir Oy Etusivu">

            <SAlogo style={{ width:'150px' }}/>

          </Link>

        </Box>
        <Stack direction={'row'} gap={2} display={{ xs:'none', md:'flex' }} alignItems={'center'}  >
          {/* <Typography variant='h6' component='div' sx={{flexGrow:1}} >
              Ammattilaisille
          </Typography> */}
          <Link to="/" aria-label="SapAir Oy Etusivu">

            <HomeIcon/>

          </Link>
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

  )
}

export default Navbar