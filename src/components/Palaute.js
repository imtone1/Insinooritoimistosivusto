import React from 'react'
import {Typography, Box } from '@mui/material'

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


const Palaute = ({teksti}) => {
  return (
    <Box sx={{maxwidth:600}}>
    <Box sx={{textAlign:'left'}}>
      <FormatQuoteIcon sx={{}}/>
</Box>
<Typography  sx={{ padding:1 }}>
{teksti}
</Typography>

</Box>
  )
}

export default Palaute