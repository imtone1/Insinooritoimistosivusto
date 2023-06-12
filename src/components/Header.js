import React from 'react'

import { Box} from "@mui/material"


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
    <Box className="banner-button-holder">
    <h3 className="banner-button">
        Ota yhteyttä
    </h3>
    </Box>
    </Box>
  )
}

export default Header