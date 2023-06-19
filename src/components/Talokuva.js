import React from 'react'
import { Box} from '@mui/material'
import talo_piirustus from '../images/talo_piirustus.png'

const Talokuva = () => {
  return (
    <Box sx={{zindex:1, position:'absolute', display:'block',  top:'50%', right:'20%', width:"12vw", flexGrow:1, opacity:0.6}} >
    <img src={talo_piirustus} alt="talo_piirustus" width={'100%'} height="auto" />
    </Box>
  )
}

export default Talokuva