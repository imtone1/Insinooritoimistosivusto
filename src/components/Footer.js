import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import logo_SA1 from '../images/logo_SA1.png'
import jasenyritys from '../images/jasenyritys_2022.png'
import LK_valkoinen from '../images/LK_valkoinen.png'
import tietosuoja from '../documents/Tietosuojaseloste.pdf'
import {ReactComponent as Asiakastietologo}  from '../images/LOGO_SILVER_STANDING_BLACK_FI_433955.svg'

import {COLORS} from '../values/colors'

const Footer = () => {
  return (
    <Box className='boxit' sx={{backgroundColor: COLORS.beige1, overflow:'hidden', margin:'auto'}}>

        <Stack direction={{xs:'column', md:'row'}} gap={{xs: 5,md:10,lg:20}} alignItems={'center'} justifyContent={'center'}>
        <Link to={'/'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}><Box sx={{padding:{xs:2, lg:10}}}>
            <img src={logo_SA1} alt="logo" style={{width:'200px'}}/>
        </Box></Link>
        <Stack direction={{xs:'column',sm:'row', md:'column'}} gap={5} >
        <Link to={'/meista'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
            <Typography>
                Meistä
            </Typography>
        </Link>
        <Typography>
            Referenssit
        </Typography>
        <Link to={'/yhteystiedot'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
            <Typography>
                Yhteystiedot
            </Typography>
        </Link>
        </Stack>
        <Stack direction={{xs:'column',sm:'row', md:'column'}} gap={5}>
        <Link to={'palvelut'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
            <Typography  sx={{width:{xs:89, sm:'inherit'}}}>
                Palvelut
            </Typography>
        </Link>
        {/* <Typography >
            Ammattilaisille
        </Typography> */}
        <Link to={'yhteystiedot'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
            <Typography >
                Laskutus
            </Typography>
        </Link>
        </Stack>
        <Stack direction={{xs:'column',sm:'row', md:'column'}} gap={5}>
          <Box sx={{width:'150px'}}>
            <img src={jasenyritys} alt="jasenyritys" style={{width:'100%'}}/>
           </Box>
           <Box sx={{width:'150px'}}>
           <img src={LK_valkoinen} alt="LK_valkoinen" style={{width:'100%'}} />
          </Box>  <Asiakastietologo style={{width:'150px'}}/>
            </Stack>
        </Stack>
     
          
            <a href={tietosuoja} target="_blank"
                    rel="noreferrer">
                     <Typography sx={{textAlign:'center', paddingTop:5}} >
                Tietosuojaseloste
            </Typography>
                </a>
       
<Typography sx={{textAlign:'center', paddingTop:5}}>
    SapAir Oy | Y-tunnus: 3245203-6 | Osoite Helmikuja 3, 21310 Vahto
    </Typography>
    </Box>
  )
}

export default Footer