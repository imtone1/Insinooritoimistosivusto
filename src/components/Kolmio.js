import React from 'react'
import { Box} from '@mui/material'
import {COLORS} from '../values/colors'

const Kolmio = () => {
  return (
    <Box sx={{ position:'absolute', bottom:0,right:0, zindex:-1, opacity:0.2 ,display:{xs:'none', md:'flex'}}}  aria-hidden="true"
    focusable="false">
    <svg width="833" height="608" viewBox="0 0 833 608" fill={COLORS.brown} xmlns="http://www.w3.org/2000/svg">
<path d="M2 607L832 1.5V607H2Z" stroke={COLORS.brown}/>
</svg>
  </Box> 
  )
}

export default Kolmio