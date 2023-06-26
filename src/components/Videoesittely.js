import React from 'react'
import mainos from '../videos/mainosvideolopullinen.mp4'
import { Box } from '@mui/system'
import {COLORS} from '../values/colors'

const Videoesittely = () => {
  return (


    <div style={{backgroundColor: COLORS.beige1}}>
        <Box sx={{maxWidth:800, margin:'auto', }}>
            <video controls width="100%" className="videoPlayer" src={mainos}></video>
        </Box>
    </div>
  
    )
}

export default Videoesittely