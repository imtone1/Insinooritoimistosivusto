import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import {COLORS} from '../values/colors'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


const Palaute = ({teksti}) => {
  return (
    <Box sx={{maxwidth:600}}>
    <Box sx={{textAlign:'left'}}>
      <FormatQuoteIcon sx={{}}/>
{/* <img src={quotyla} alt="double_quotes_left_icon" width={'5%'} /> */}
</Box>
<Typography  sx={{ padding:3 }}>
{teksti}
</Typography>

</Box>
  )
}

export default Palaute