import React from 'react'
import mainos from '../videos/mainosvideolopullinen.mp4'
import { Box } from '@mui/material'
import captionfi from '../other/captionsfi.vtt'

const Videoesittely = () => {
  return (
    <Box sx={{ maxWidth:800, margin:'auto' }}>
      <video controls width="100%" className="videoPlayer" src={mainos} type="video/mp4"></video>
      <track label="Finnish" kind="captions" srcLang="fi" src={captionfi} />
    </Box>

  )
}

export default Videoesittely