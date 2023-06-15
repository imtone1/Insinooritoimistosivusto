import React from 'react'

import { Box} from "@mui/material"
import { Link } from 'react-router-dom'

import talo from '../images/taloheader.png'


const Header = () => {
  return (
    <Box className="banner" sx={{ flexGrow: 1}}>
  
        <img src={talo} alt="talo" className='banner_img'/>
        <Box className="banner-text-holder">
    <h1 className="banner-text">
        LVI-suunnitelu
    </h1>
    </Box>
    <Box className="banner-text-holder2">
    <h3 className="banner-text2">
        Ammattitaitoisesti, selkeästi ja luotettavasti
    </h3>
    </Box>
    <Link to={'/yhteystiedot'} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }}>
    <Box className="banner-button-holder">
    <h3 className="banner-button">
        Ota yhteyttä
    </h3>
    </Box>
    </Link>
    </Box>
  )
}

export default Header